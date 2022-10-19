/// <reference types="cypress" />

import BasePage from "./basePage";
import { login } from "../i18n/commonData.dict";

class HamburgerMenu extends BasePage {
  url = Cypress.env("cartUrl");
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
    this.openHamburgerMenu();
    this.verifyMultipleElementsAreVisible(
      this.elements.closeHamburgerMenu,
      this.elements.hamMenuAllItems,
      this.elements.hamMenuAbout,
      this.elements.hamMenuLogout,
      this.elements.hamMenuResetAppState
    );
  }

  openHamburgerMenu() {
    cy.get(this.elements.hamburgerMenuIcon).click();
  }

  goToAllItems() {
    cy.get(this.elements.hamMenuAllItems).click();
  }

  goToAbout() {
    cy.get(this.elements.hamMenuAbout).click();
  }

  clickLogout() {
    cy.get(this.elements.hamMenuLogout).click();
  }

  clickResetAppState() {
    cy.get(this.elements.hamMenuResetAppState).click();
  }

  assertUserWentToAllItems() {
    cy.url().should("eq", Cypress.env("inventoryUrl"));
  }

  assertUserIsNotLogin() {
    cy.url().should("eq", Cypress.env("baseUrl"));
  }
}
export default HamburgerMenu;
