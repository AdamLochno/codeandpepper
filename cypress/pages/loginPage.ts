/// <reference types="cypress" />

import BasePage from "./basePage";
import { login } from "../i18n/commonData";

class LoginPage extends BasePage {
  url = Cypress.env("baseUrl");
  elements = {
    usernameInput: "input[id='user-name']",
    passwordInput: "input[id='password']",
    loginBtn: "input[id='login-button']",
    errorModal: "h3[data-test='error']",
  };

  login(username: string, password: string) {
    cy.get(this.elements.usernameInput).type(username);
    cy.get(this.elements.passwordInput).type(password);
    cy.get(this.elements.loginBtn).click();
  }

  assertLoginWithSuccess() {
    this.verifyMultipleElementsNotExist(
      this.elements.usernameInput,
      this.elements.passwordInput,
      this.elements.loginBtn
    );
    cy.url().should("not.eq", this.url);
  }

  assertLoginWithFailure() {
    cy.url().should("eq", this.url);
    cy.get(this.elements.errorModal).should("be.visible");
    cy.get(this.elements.errorModal).should("have.text", login.lockedUserMsg);
  }
}
export default LoginPage;
