/// <reference types="cypress" />

import BasePage from "./basePage";
import { sortElements } from "../i18n/commonData";
import { items } from "../i18n/items.dict";

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

  verfiyElementsVisibility() {
    this.verifyMultipleElementsAreVisible(
      this.elements.cartIcon,
      this.elements.sortProductsDropList,
      this.elements.footerTwitterIcon,
      this.elements.footerFacebookIcon,
      this.elements.footerLinkedInIcon,
      this.elements.hamburgerMenuIcon
    );
  }

  clickRemoveAddBtn(itemName: string, value: string) {
    cy.get(this.elements.inventoryItemName)
      .contains(itemName)
      .parents(this.elements.inventoryItem)
      .find(this.elements.inventoryItemButton)
      .should("have.text", value)
      .click();
  }
  addElementToCart(itemName: string) {
    this.clickRemoveAddBtn(itemName, "Add to cart");
  }

  removeElementFromCart(itemName: string) {
    this.clickRemoveAddBtn(itemName, "Remove");
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

  openCart() {
    cy.get(this.elements.cartIcon).click();
  }

  assertSortingWorks() {
    this.selectSorting(sortElements.sortAZValue);
    this.checkFirstElementsTitle(items.sauceLabsBackpack.name);

    this.selectSorting(sortElements.sortZAValue);
    this.checkFirstElementsTitle(items.testAllTheThingTshirt.name);

    this.selectSorting(sortElements.sortLowToHighValue);
    this.checkFirstElementsTitle(items.sauceLabsOnesie.name);

    this.selectSorting(sortElements.sortHighToLowValue);
    this.checkFirstElementsTitle(items.sauceLabsFleeceJacket.name);
  }

  selectSorting(value: string) {
    cy.get(this.elements.sortProductsDropList).select(value);
  }

  checkFirstElementsTitle(value: string) {
    cy.get(this.elements.inventoryItemName).first().should("have.text", value);
  }
}
export default InventoryPage;
