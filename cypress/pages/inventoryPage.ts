/// <reference types="cypress" />

import BasePage from "./basePage";
import { login } from "../i18n/login.dict";

class InventoryPage extends BasePage {
  url = Cypress.env("inventoryUrl");
  elements = {
    cartIcon: ".shopping_cart_link",
    cartItemsAmount: ".shopping_cart_badge",
    sortProductsDropList: "select[data-test='product_sort_container']",
    footerTwitterIcon: ".social_twitter",
    footerFacebookIcon: ".social_facebook",
    footerLinkedInIcon: ".social_linkedin",
    inventoryItemName: ".inventory_item_name",
    inventoryItem: ".inventory_item",
    inventoryItemButton: ".btn",
    hamburgerMenuIcon: "#react-burger-menu-btn",
    addToCartButtons: ".btn_primary",
    removeFromCartButtons: ".btn_secondary",
    closeHamburgerMenu: "#react-burger-cross-btn",
    hamMenuAllItems: "#inventory_sidebar_link",
    hamMenuAbout: "#about_sidebar_link",
    hamMenuLogout: "#logout_sidebar_link",
    hamMenuResetAppState: "#reset_sidebar_link",
  };

  smokeTest() {
    this.verifyMultipleElementsAreVisible(
      this.elements.cartIcon,
      this.elements.sortProductsDropList,
      this.elements.footerTwitterIcon,
      this.elements.footerFacebookIcon,
      this.elements.footerLinkedInIcon,
      this.elements.hamburgerMenuIcon
    );
  }

  addOrDeleteItemToCartByItsName(itemName: string) {
    cy.get(this.elements.inventoryItemName)
      .contains(itemName)
      .parents(this.elements.inventoryItem)
      .find(this.elements.inventoryItemButton)
      .click();
  }

  assertRemoveBtnAppearred() {
    cy.get(this.elements.removeFromCartButtons).should("be.visible");
  }

  assertAmounOfElInCart(amount: number) {
    cy.get(this.elements.cartItemsAmount).should("have.text", amount);
  }

  assertLackOfElInCart() {
    cy.get(this.elements.cartItemsAmount).should("not.exist");
  }
}
export default InventoryPage;
