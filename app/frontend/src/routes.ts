export const baseRoute = "/";

export const contributeRoute = "/contribute";

export const loginRoute = "/login";
export const resetPasswordRoute = "/password-reset";
export const settingsRoute = "/account-settings";
export const confirmChangeEmailRoute = "/confirm-email";

export const signupRoute = "/signup";

// user

const userBaseRoute = "/user";
export type UserTab = "about" | "home" | "references" | "favorites" | "photos";
export type EditUserTab = Extract<UserTab, "about" | "home">;

export const userRoute = `${userBaseRoute}/:userId?/:tab?`;
export const editUserRoute = `${userBaseRoute}/edit/:tab?`;

type UserRouteOptions<T extends UserTab> = {
  username?: string;
  tab?: T;
  edit?: T extends EditUserTab ? true : T extends undefined ? true : never;
};

export function routeToUser<T extends EditUserTab>(
  options?: Omit<UserRouteOptions<T>, "username"> & { edit: true }
): string;
export function routeToUser<T extends UserTab>(
  options?: Omit<UserRouteOptions<T>, "edit">
): string;
export function routeToUser<T extends UserTab>(options?: T): string;
export function routeToUser<T extends UserTab>({
  username,
  tab,
  edit,
}: UserRouteOptions<T> = {}) {
  // edit: user/edit(/tab)
  // view: user(/username)(/tab)
  return `${userBaseRoute}${!edit && username ? "/" : ""}${
    (!edit && username) || ""
  }${edit ? "/edit" : ""}${tab ? "/" : ""}${tab || ""}`;
}

export const messagesRoute = "/messages";
export const groupChatsRoute = `${messagesRoute}/chats`;
export const surfingRequestsRoute = `${messagesRoute}/surfing`;
export const hostingRequestsRoute = `${messagesRoute}/hosting`;
export const meetRoute = `${messagesRoute}/meet`;
export const hostRequestRoute = `${messagesRoute}/request`;
export const archivedMessagesRoute = `${messagesRoute}/archived`;
export const routeToGroupChat = (id: number) => `${groupChatsRoute}/${id}`;
export const routeToHostRequest = (id: number) => `${hostRequestRoute}/${id}`;

export const eventsRoute = "/events";
export const logoutRoute = "/logout";
export const connectionsRoute = "/connections";
export const friendsRoute = `${connectionsRoute}/friends`;

export const searchRoute = "/search";
export const routeToSearch = (query: string) => `${searchRoute}/${query}`;
export const jailRoute = "/restricted";
export const tosRoute = "/tos";

const placeBaseRoute = "/place";
export const placeRoute = `${placeBaseRoute}/:pageId/:pageSlug?`;
export const routeToPlace = (id: number, slug: string) =>
  `${placeBaseRoute}/${id}/${slug}`;
export const newPlaceRoute = `${placeBaseRoute}/new`;

const guideBaseRoute = "/guide";
export const guideRoute = `${guideBaseRoute}/:pageId/:pageSlug?`;
export const routeToGuide = (id: number, slug: string) =>
  `${guideBaseRoute}/${id}/${slug}`;
export const newGuideRoute = `${guideBaseRoute}/new`;

const groupBaseRoute = "/group";
export const groupRoute = `${groupBaseRoute}/:groupId/:groupSlug?`;
export const routeToGroup = (id: number, slug: string) =>
  `${groupBaseRoute}/${id}/${slug}`;

const discussionBaseRoute = "/discussion";
export const discussionRoute = `${discussionBaseRoute}/:discussionId/:discussionSlug?`;
export const routeToDiscussion = (id: number, slug: string) =>
  `${discussionBaseRoute}/${id}/${slug}`;

const eventBaseRoute = "/event";
export const eventRoute = `${eventBaseRoute}/:eventId/:eventSlug?`;
export const routeToEvent = (id: number, slug: string) =>
  `${eventBaseRoute}/${id}/${slug}`;

const communityBaseRoute = "/community";
export type CommunityTab =
  | "overview"
  | "find-host"
  | "events"
  | "local-points"
  | "discussions"
  | "hangouts";
export const communityRoute = `${communityBaseRoute}/:communityId/:communitySlug/:page?`;
export const routeToCommunity = (
  id: number,
  slug: string,
  page?: CommunityTab
) => `${communityBaseRoute}/${id}/${slug}${page ? `/${page}` : ""}`;

export const couchersRoute = "https://couchers.org";
export const forumRoute = "https://community.couchers.org";
