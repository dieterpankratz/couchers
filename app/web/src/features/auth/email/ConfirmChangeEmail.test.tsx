import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LOGIN_PAGE } from "features/auth/constants";
import { ConfirmChangeEmailRes, EmailConfirmationState } from "proto/auth_pb";
import { Route, Switch } from "react-router-dom";
import { confirmChangeEmailRoute, loginRoute } from "routes";
import { service } from "service";
import { getHookWrapperWithClient } from "test/hookWrapper";
import { MockedService, t } from "test/utils";

import ConfirmChangeEmail from "./ConfirmChangeEmail";

const confirmChangeEmailMock = service.account
  .confirmChangeEmail as MockedService<
  typeof service.account.confirmChangeEmail
>;

function renderPage() {
  const { wrapper } = getHookWrapperWithClient({
    initialRouterEntries: [`${confirmChangeEmailRoute}/Em4iLR3seTtok3n`],
  });

  render(
    <Switch>
      <Route path={`${confirmChangeEmailRoute}/:resetToken`}>
        <ConfirmChangeEmail />
      </Route>
      <Route path={loginRoute}>{LOGIN_PAGE}</Route>
    </Switch>,
    { wrapper }
  );
}

describe("ConfirmChangeEmail", () => {
  it("shows the loading state on initial load", async () => {
    confirmChangeEmailMock.mockImplementation(() => new Promise(() => void 0));
    renderPage();

    expect(
      await screen.findByText(
        t("auth:change_email_confirmation.change_in_progress")
      )
    ).toBeVisible();
  });

  describe("when it requires confirming new email", () => {
    beforeEach(async () => {
      confirmChangeEmailMock.mockResolvedValue(
        new ConfirmChangeEmailRes()
          .setState(
            EmailConfirmationState.EMAIL_CONFIRMATION_STATE_REQUIRES_CONFIRMATION_FROM_NEW_EMAIL
          )
          .toObject()
      );
      renderPage();
    });

    it("shows the alert", async () => {
      const successAlert = await screen.findByRole("alert");
      expect(successAlert).toBeVisible();
      expect(successAlert).toHaveTextContent(
        t("auth:change_email_confirmation.requires_confirmation_from_new_email")
      );
      expect(confirmChangeEmailMock).toHaveBeenCalledTimes(1);
      expect(confirmChangeEmailMock).toHaveBeenLastCalledWith(
        "Em4iLR3seTtok3n"
      );
    });
  });

  describe("when it requires confirming old email", () => {
    beforeEach(async () => {
      confirmChangeEmailMock.mockResolvedValue(
        new ConfirmChangeEmailRes()
          .setState(
            EmailConfirmationState.EMAIL_CONFIRMATION_STATE_REQUIRES_CONFIRMATION_FROM_OLD_EMAIL
          )
          .toObject()
      );
      renderPage();
    });

    it("shows the alert", async () => {
      const successAlert = await screen.findByRole("alert");
      expect(successAlert).toBeVisible();
      expect(successAlert).toHaveTextContent(
        t("auth:change_email_confirmation.requires_confirmation_from_old_email")
      );
      expect(confirmChangeEmailMock).toHaveBeenCalledTimes(1);
      expect(confirmChangeEmailMock).toHaveBeenLastCalledWith(
        "Em4iLR3seTtok3n"
      );
    });
  });

  describe("when the change email completes successfully", () => {
    beforeEach(async () => {
      confirmChangeEmailMock.mockResolvedValue(
        new ConfirmChangeEmailRes()
          .setState(EmailConfirmationState.EMAIL_CONFIRMATION_STATE_SUCCESS)
          .toObject()
      );
      renderPage();
    });

    it("shows the success alert", async () => {
      const successAlert = await screen.findByRole("alert");
      expect(successAlert).toBeVisible();
      expect(successAlert).toHaveTextContent(
        t("auth:change_email_confirmation.success_message")
      );
      expect(confirmChangeEmailMock).toHaveBeenCalledTimes(1);
      expect(confirmChangeEmailMock).toHaveBeenLastCalledWith(
        "Em4iLR3seTtok3n"
      );
    });

    it("shows a link that takes you to the login page when clicked", async () => {
      userEvent.click(
        await screen.findByRole("link", { name: t("auth:login_prompt") })
      );

      expect(await screen.findByText(LOGIN_PAGE)).toBeInTheDocument();
    });
  });

  it("shows an error alert if the reset password process failed to complete", async () => {
    jest.spyOn(console, "error").mockReturnValue(undefined);
    confirmChangeEmailMock.mockRejectedValue(new Error("Invalid token"));
    renderPage();

    const errorAlert = await screen.findByRole("alert");
    expect(errorAlert).toBeVisible();
    expect(errorAlert).toHaveTextContent("Error changing email: Invalid token");
  });
});
