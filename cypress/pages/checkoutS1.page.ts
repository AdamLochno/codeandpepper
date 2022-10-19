/// <reference types="cypress" />

import BasePage from "./basePage";
import { login } from "../i18n/commonData.dict";
import {
  generateFirstName,
  generateLastName,
  generateZipCode,
} from "../utils/generateData";

class CheckOutS1 extends BasePage {
  url = Cypress.env("checkoutStep1");
  elements = {
    firstNameInput: "input[data-test='firstName']",
    lastNameInput: "input[data-test='lastName']",
    postalCodeInput: "input[data-test='postalCode']",
    cancelBtn: "button[data-test='cancel']",
    continueBtn: "input[data-test='continue']",
    title: ".title",
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

  clickContinue() {
    this.assertUrl(this.url);
    cy.get(this.elements.continueBtn).click();
    cy.url().should("not.eq", this.url);
  }
}
export default CheckOutS1;
