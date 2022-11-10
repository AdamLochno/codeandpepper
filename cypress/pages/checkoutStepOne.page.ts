import BasePage from "./basePage";
import InventoryPage from "./inventoryPage";
import {
  generateFirstName,
  generateLastName,
  generateZipCode,
} from "../utils/generateData";
import { stepOneValidationError } from "../i18n/commonData";
const inventoryPage = new InventoryPage();

class CheckOutStepOne extends BasePage {
  url = Cypress.env("checkoutStepOne");
  elements = {
    firstNameInput: "input[data-test='firstName']",
    lastNameInput: "input[data-test='lastName']",
    postalCodeInput: "input[data-test='postalCode']",
    cancelBtn: "button[data-test='cancel']",
    continueBtn: "input[data-test='continue']",
    title: ".title",
    errorMsg: "h3[data-test='error']",
  };
  verfiyElementsVisibility() {
    this.verifyMultipleElementsAreVisible(
      this.elements.firstNameInput,
      this.elements.lastNameInput,
      this.elements.postalCodeInput,
      this.elements.cancelBtn,
      this.elements.continueBtn,
      this.elements.title
    );
  }

  typeFormWithCorrectData() {
    cy.get(this.elements.firstNameInput).type(generateFirstName());
    cy.get(this.elements.lastNameInput).type(generateLastName());
    cy.get(this.elements.postalCodeInput).type(generateZipCode());
  }

  assertErrorMsg(value: string) {
    cy.get(this.elements.errorMsg).should("have.text", value);
  }

  checkFormValidation() {
    this.clickContinueBtn();

    this.assertErrorMsg(stepOneValidationError.firstNameBlank);
    cy.get(this.elements.firstNameInput).type(generateFirstName());
    this.clickContinueBtn();

    this.assertErrorMsg(stepOneValidationError.lastNameBlank);
    cy.get(this.elements.lastNameInput).type(generateLastName());
    this.clickContinueBtn();

    this.assertErrorMsg(stepOneValidationError.postalBlank);
    cy.get(this.elements.postalCodeInput).type(generateZipCode());
    this.clickContinueBtn();
  }

  clickContinueBtn() {
    this.assertUrl(this.url);
    cy.get(this.elements.continueBtn).click();
  }

  cancelCheckout() {
    cy.get(this.elements.cancelBtn).click();
    cy.url().should("eq", Cypress.env("cartUrl"));
    inventoryPage.assertAmounOfElInCart(1);
  }
}
export default CheckOutStepOne;
