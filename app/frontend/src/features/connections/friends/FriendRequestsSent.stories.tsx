import { Meta, Story } from "@storybook/react/types-6-0";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { store } from "../../../stories/__mocks__/store";
import { mockedService } from "../../../stories/__mocks__/service";
import { FriendRequest } from "../../../pb/api_pb";
import FriendRequestsSent from "./FriendRequestsSent";

export default {
  title: "FriendRequestsSent",
  component: FriendRequestsSent,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

interface FriendRequestsState {
  sentList: FriendRequest.AsObject[];
  receivedList: FriendRequest.AsObject[];
}

interface MockOverrides {
  listFriendRequests?: () => Promise<FriendRequestsState>;
  cancelFriendRequest?: () => Promise<Empty>;
}

const Template: Story<{
  friendRequests: FriendRequestsState;
  overrides?: MockOverrides;
}> = ({ friendRequests, overrides }) => {
  const friendRequestsRef = useRef<{
    sentList: FriendRequest.AsObject[];
    receivedList: FriendRequest.AsObject[];
  }>(friendRequests);

  setFriendRequestsMocks(friendRequestsRef, overrides);

  return (
    <div style={{ width: "50%" }}>
      <FriendRequestsSent />
    </div>
  );
};

export const WithPendingRequests = Template.bind({});
WithPendingRequests.args = {
  friendRequests: {
    sentList: [
      {
        friendRequestId: 1,
        state: FriendRequest.FriendRequestStatus.PENDING,
        userId: 3,
      },
    ],
    receivedList: [],
  },
};

export const ErrorCancellingRequest = Template.bind({});
ErrorCancellingRequest.args = {
  friendRequests: {
    sentList: [
      {
        friendRequestId: 1,
        state: FriendRequest.FriendRequestStatus.PENDING,
        userId: 3,
      },
    ],
    receivedList: [],
  },
  overrides: {
    cancelFriendRequest: async () => {
      throw new Error("Can't cancel friend request...");
    },
  },
};

// Should be impossible unless the DB is corrupted, but interesting to see
// how this looks in the UI if it does happen
export const PendingRequestsWithMissingUser = Template.bind({});
PendingRequestsWithMissingUser.args = {
  friendRequests: {
    sentList: [
      {
        friendRequestId: 1,
        state: FriendRequest.FriendRequestStatus.PENDING,
        userId: 3,
      },
      // pending request to missing user
      {
        friendRequestId: 2,
        state: FriendRequest.FriendRequestStatus.PENDING,
        userId: 4,
      },
    ],
    receivedList: [],
  },
};

function setFriendRequestsMocks(
  friendRequests: React.MutableRefObject<{
    sentList: FriendRequest.AsObject[];
    receivedList: FriendRequest.AsObject[];
  }>,
  overrides: any = {}
) {
  mockedService.api.listFriendRequests = async () => friendRequests.current;
  mockedService.api.cancelFriendRequest =
    overrides.cancelFriendRequest ??
    (async () => {
      friendRequests.current = { sentList: [], receivedList: [] };
      return new Empty();
    });
}
