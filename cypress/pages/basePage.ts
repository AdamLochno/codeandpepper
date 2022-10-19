import { Elements } from "../types/elements.type";

class BasePage {
  public url: string;
  public elements: Elements;

  constructor() {
    this.url = this.url;
    this.elements = this.elements;
  }

  public open() {
    cy.visit(this.url, { failOnStatusCode: false });
  }

  public setCookieForStandardUser() {
    cy.setCookie("session-username", "standard_user");
  }

  public verifyMultipleElementsAreVisible(...elements: any[]) {
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
    cy.log(`strona ${cy.url()} czy jest równa z parametru ${url}`);
    cy.url().should("eq", url);
  }
}

export default BasePage;
