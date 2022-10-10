/// <reference types="cypress" />

class LoginPage {
  elements = {
    usernameInput: "input[id='user-name']",
    passwordInput: "input[id='password']",
    loginBtn: "input[id='login-button']",
  };
  url = Cypress.env("baseUrl");
  testData = {};

  visitAndLogin() {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(this.elements.usernameInput).type(Cypress.env("username"));
    cy.get(this.elements.passwordInput).type(Cypress.env("password"));
    cy.get(this.elements.loginBtn).click();
    cy.url().should("not.eq", this.url);
  }
}
export default LoginPage;
