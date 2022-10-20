/// <reference types="cypress" />

import BasePage from "./basePage";

class CartPage extends BasePage {
  url = Cypress.env("cartUrl");
  elements = {
    inventoryItemName: ".inventory_item_name",
    inventoryItemDesc: ".inventory_item_desc",
    inventoryItemPrice: ".inventory_item_price",
    quantityLabel: ".cart_quantity_label",
    descLabel: ".cart_desc_label",
    removeBtn: "#remove-sauce-labs-bike-light",
    continueShoppingBtn: "button[data-test='continue-shopping']",
    checkoutBtn: "button[data-test='checkout']",
  };

  verfiyElementsVisibility() {
    this.verifyMultipleElementsAreVisible(
      this.elements.inventoryItemName,
      this.elements.inventoryItemDesc,
      this.elements.inventoryItemPrice,
      this.elements.quantityLabel,
      this.elements.descLabel,
      this.elements.removeBtn,
      this.elements.continueShoppingBtn,
      this.elements.checkoutBtn
    );
  }
  checkInformation() {
    this.assertUrl(this.url);
    cy.get(this.elements.inventoryItemName).should(
      "have.text",
      "Sauce Labs Bike Light"
    );
    cy.get(this.elements.inventoryItemDesc).should(
      "have.text",
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
    );
    cy.get(this.elements.inventoryItemPrice).should("contain", "9.99");
  }

  clickCheckout() {
    cy.get(this.elements.checkoutBtn).click();
  }
}
export default CartPage;
