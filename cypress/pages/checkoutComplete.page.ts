import BasePage from "./basePage";
import { checkoutComplete } from "../i18n/commonData";

class CheckoutComplete extends BasePage {
  url = Cypress.env("checkoutStepTwo");
  elements = {
    title: ".title",
    header: "#checkout_complete_container h2",
    completeText: ".complete-text",
    image: "img[alt='Pony Express']",
    backToProductButton: "button[data-test='back-to-products']",
  };

  verfiyElementsVisibility() {
    this.verifyMultipleElementsAreVisible(
      this.elements.title,
      this.elements.header,
      this.elements.completeText,
      this.elements.image,
      this.elements.backToProductButton
    );
  }

  assertDataPresentedCorrectly() {
    cy.get(this.elements.title).should("have.text", checkoutComplete.title);
    cy.get(this.elements.header).should("have.text", checkoutComplete.header);
    cy.get(this.elements.completeText).should(
      "have.text",
      checkoutComplete.text
    );
  }
}
export default CheckoutComplete;
