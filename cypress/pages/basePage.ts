import { Elements } from "../types/elements.type";

class BasePage {
  public url: string;
  public elements: Elements;

  constructor() {
    this.url = Cypress.env("baseUrl");
    this.elements = {};
  }

  public open() {
    cy.visit(this.url, { failOnStatusCode: false });
  }

  public setCookieForStandardUser() {
    cy.setCookie("session-username", "standard_user");
  }

  public verifyMultipleElementsAreVisible(...elements: string[]) {
    elements.forEach((el) => {
      cy.get(el).should("be.visible");
    });
  }

  public verifyMultipleElementsNotExist(...elements: string[]) {
    elements.forEach((el) => {
      cy.get(el).should("not.exist");
    });
  }

  public assertUrl(url: string) {
    cy.url().should("eq", url);
  }

  public assertCookieIsEmpty() {
    cy.getCookies().should("be.empty");
  }
}

export default BasePage;
