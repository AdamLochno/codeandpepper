/// <reference types="cypress" />

import BasePage from "./basePage";
import { login } from "../i18n/commonData.dict";
import { items } from "../i18n/items.dict";
import {
  generateFirstName,
  generateLastName,
  generateZipCode,
} from "../utils/generateData";

class CheckOutS1 extends BasePage {
  url = Cypress.env("checkoutStep2");
  elements = {
    step2Title: ".title",
    quantityLabel: ".cart_quantity_label",
    descLabel: ".cart_desc_label",
    cartQuantity: ".cart_quantity",
    itemName: ".inventory_item_name",
    itemDesc: ".inventory_item_desc",
    itemPrice: ".inventory_item_price",
    summaryInfoLabel: ".summary_info_label",
    summaryValueLabel: ".summary_value_label",
    summary_subtotal_label: ".summary_subtotal_label",
    summary_tax_label: ".summary_tax_label",
    summary_total_label: ".summary_total_label",
    cancelBtn: "button[data-test='cancel']",
    finishBtn: "button[data-test='finish']",
  };

  smokeTest() {
    this.verifyMultipleElementsAreVisible(
      this.elements.step2Title,
      this.elements.quantityLabel,
      this.elements.descLabel,
      this.elements.cartQuantity,
      this.elements.itemName,
      this.elements.itemDesc,
      this.elements.itemPrice,
      this.elements.summaryValueLabel,
      this.elements.summary_subtotal_label,
      this.elements.summary_tax_label,
      this.elements.summary_total_label,
      this.elements.cancelBtn,
      this.elements.finishBtn
    );
  }

  clickFinish() {
    this.assertUrl(this.url);
    cy.get(this.elements.finishBtn).click();
  }

  assertDataCorrect() {
    cy.get(this.elements.itemName).should(
      "have.text",
      items.sauceLabsBikeLight.name
    );
    cy.get(this.elements.itemDesc).should(
      "have.text",
      items.sauceLabsBikeLight.desc
    );
    cy.get(this.elements.itemPrice).should(
      "have.text",
      items.sauceLabsBikeLight.price
    );
  }
}
export default CheckOutS1;
