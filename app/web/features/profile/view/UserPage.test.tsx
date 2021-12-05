import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  CONTENT_REPORT,
  CONTENT_REPORT_DESCRIPTION_LABEL,
  CONTENT_REPORT_REASON_LABEL,
  CONTENT_REPORT_SUCCESS,
  REASON_REQUIRED,
  SECTION_LABELS,
  SUBMIT,
} from "features/constants";
import useCurrentUser from "features/userQueries/useCurrentUser";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import mockRouter from "next-router-mock";
import { User } from "proto/api_pb";
import React from "react";
import { routeToUser } from "routes";
import { service } from "service";
import wrapper from "test/hookWrapper";
import { getLanguages, getRegions, getUser } from "test/serviceMockDefaults";
import { addDefaultUser, MockedService } from "test/utils";

import { CANCEL, MORE_PROFILE_ACTIONS_A11Y_TEXT } from "../constants";
import UserPage from "./UserPage";

jest.mock("features/userQueries/useCurrentUser");

const getUserMock = service.user.getUser as MockedService<
  typeof service.user.getUser
>;
const reportContentMock = service.reporting.reportContent as MockedService<
  typeof service.reporting.reportContent
>;

const getLanguagesMock = service.resources.getLanguages as jest.MockedFunction<
  typeof service.resources.getLanguages
>;

const getRegionsMock = service.resources.getRegions as jest.MockedFunction<
  typeof service.resources.getRegions
>;

const useCurrentUserMock = useCurrentUser as jest.MockedFunction<
  typeof useCurrentUser
>;

function renderUserPage(username: string) {
  mockRouter.setCurrentUrl(routeToUser(username));
  render(<UserPage username={username} tab="about" />, { wrapper });
}

describe("User page", () => {
  beforeAll(() => {
    jest.setTimeout(10000);
  });

  beforeEach(() => {
    getUserMock.mockImplementation(getUser);
    reportContentMock.mockResolvedValue(new Empty());
    getLanguagesMock.mockImplementation(getLanguages);
    getRegionsMock.mockImplementation(getRegions);
    addDefaultUser();
  });

  describe("when viewing the current user's profile", () => {
    beforeEach(() => {
      useCurrentUserMock.mockReturnValue({
        data: {
          username: "funnycat",
        } as User.AsObject,
        isError: false,
        isLoading: false,
        isFetching: false,
        error: "",
      });
    });

    it("does not show the button for opening a profile actions menu (viewed with username)", async () => {
      renderUserPage("funnycat");

      expect(
        await screen.findByRole("heading", { name: "Funny Cat current User" })
      ).toBeVisible();
      expect(
        screen.queryByRole("button", { name: MORE_PROFILE_ACTIONS_A11Y_TEXT })
      ).not.toBeInTheDocument();
    });

    describe("and a tab is opened", () => {
      it("updates the url with the chosen tab value", async () => {
        renderUserPage("funnycat");

        expect(mockRouter.pathname).toBe("/user/funnycat");

        userEvent.click(await screen.findByText(SECTION_LABELS.home));

        expect(mockRouter.pathname).toBe("/user/funnycat/home");

        userEvent.click(await screen.findByText(SECTION_LABELS.about));

        expect(mockRouter.pathname).toBe("/user/funnycat/about");
      });
    });
  });

  describe("when viewing another user's profile and a tab is opened", () => {
    beforeEach(() => {
      renderUserPage("funnydog");
    });

    it("updates the url with the chosen tab value", async () => {
      expect(mockRouter.pathname).toBe("/user/funnydog");

      userEvent.click(await screen.findByText(SECTION_LABELS.home));

      expect(mockRouter.pathname).toBe("/user/funnydog/home");

      userEvent.click(await screen.findByText(SECTION_LABELS.about));

      expect(mockRouter.pathname).toBe("/user/funnydog/about");
    });

    describe("and the 'report user' option is clicked", () => {
      beforeEach(async () => {
        userEvent.click(
          await screen.findByRole("button", {
            name: CONTENT_REPORT,
          })
        );
      });

      it("opens the report user dialog", async () => {
        expect(
          await screen.findByRole("heading", { name: CONTENT_REPORT })
        ).toBeVisible();
      });

      it("closes the report user dialog if the 'Cancel' button is clicked", async () => {
        userEvent.click(await screen.findByRole("button", { name: CANCEL }));

        await waitForElementToBeRemoved(
          screen.getByRole("heading", { name: CONTENT_REPORT })
        );
        expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
      });

      it("reports the user successfully", async () => {
        const reason = "Dating / Flirting";
        const description = "I feel very uncomfortable around this creepy dog";

        userEvent.selectOptions(
          await screen.findByLabelText(CONTENT_REPORT_REASON_LABEL),
          reason
        );
        userEvent.type(
          screen.getByLabelText(CONTENT_REPORT_DESCRIPTION_LABEL),
          description
        );
        userEvent.click(screen.getByRole("button", { name: SUBMIT }));

        const successAlert = await screen.findByRole("alert");
        expect(
          within(successAlert).getByText(CONTENT_REPORT_SUCCESS)
        ).toBeVisible();
        expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
        expect(reportContentMock).toHaveBeenCalledTimes(1);
        expect(reportContentMock).toHaveBeenCalledWith({
          authorUser: 2,
          contentRef: "profile/2",
          description,
          reason,
        });
      });

      it("does not submit the user report if the required fields are not filled in", async () => {
        userEvent.click(screen.getByRole("button", { name: SUBMIT }));

        expect(await screen.findByText(REASON_REQUIRED)).toBeVisible();
        expect(reportContentMock).not.toHaveBeenCalled();
      });

      it("shows an error alert if the report user request failed to submit", async () => {
        jest.spyOn(console, "error").mockReturnValue(undefined);
        reportContentMock.mockRejectedValue(new Error("API error"));
        const reason = "Dating / Flirting";
        const description = " ";

        userEvent.selectOptions(
          await screen.findByLabelText(CONTENT_REPORT_REASON_LABEL),
          reason
        );
        userEvent.type(
          screen.getByLabelText(CONTENT_REPORT_DESCRIPTION_LABEL),
          description
        );
        userEvent.click(screen.getByRole("button", { name: SUBMIT }));

        const errorAlert = await screen.findByRole("alert");
        expect(within(errorAlert).getByText("API error")).toBeVisible();
      });
    });
  });
});
