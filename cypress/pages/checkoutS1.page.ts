/// <reference types="cypress" />

import BasePage from "./basePage";
import InventoryPage from "./inventoryPage";
import {
  generateFirstName,
  generateLastName,
  generateZipCode,
} from "../utils/generateData";
const inventoryPage = new InventoryPage();

class CheckOutS1 extends BasePage {
  url = Cypress.env("checkoutStep1");
  elements = {
    firstNameInput: "input[data-test='firstName']",
    lastNameInput: "input[data-test='lastName']",
    postalCodeInput: "input[data-test='postalCode']",
    cancelBtn: "button[data-test='cancel']",
    continueBtn: "input[data-test='continue']",
    title: ".title",
    errorMsg: "h3[data-test='error']",
  };
  smokeTest() {
    this.verifyMultipleElementsAreVisible(
      this.elements.firstNameInput,
      this.elements.lastNameInput,
      this.elements.postalCodeInput,
      this.elements.cancelBtn,
      this.elements.continueBtn,
      this.elements.title
    );
  }

  typeForm() {
    cy.get(this.elements.firstNameInput).type(generateFirstName());
    cy.get(this.elements.lastNameInput).type(generateLastName());
    cy.get(this.elements.postalCodeInput).type(generateZipCode());
  }

  testForm() {
    this.clickContinue();
    cy.get(this.elements.errorMsg).should(
      "have.text",
      "Error: First Name is required"
    );
    cy.get(this.elements.firstNameInput).type(generateFirstName());
    this.clickContinue();
    cy.get(this.elements.errorMsg).should(
      "have.text",
      "Error: Last Name is required"
    );
    cy.get(this.elements.lastNameInput).type(generateLastName());

    this.clickContinue();

    cy.get(this.elements.errorMsg).should(
      "have.text",
      "Error: Postal Code is required"
    );

    cy.get(this.elements.postalCodeInput).type(generateZipCode());

    this.clickContinue();
  }

  clickContinue() {
    this.assertUrl(this.url);
    cy.get(this.elements.continueBtn).click();
  }

  cancelCheckout() {
    cy.get(this.elements.cancelBtn).click();
    cy.url().should("eq", Cypress.env("cartUrl"));
    inventoryPage.assertAmounOfElInCart(1);
  }
}
export default CheckOutS1;
