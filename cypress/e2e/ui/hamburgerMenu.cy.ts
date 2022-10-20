import InventoryPage from "../../pages/inventoryPage";
import HamburgerMenu from "../../pages/hamburgerMenu.page";

const hamburgerMenu = new HamburgerMenu();
const inventoryPage = new InventoryPage();

describe("As a user I want to verify hamburger menu", () => {
  beforeEach(() => {
    cy.getCookies().should("be.empty");
    hamburgerMenu.setCookieForStandardUser();
    hamburgerMenu.open();
    hamburgerMenu.smokeTest();
  });

  it("Scenario: I want to check redirector to all items", () => {
    //WHEN
    hamburgerMenu.goToAllItems();

    //THEN
    hamburgerMenu.assertUrl(Cypress.env("inventoryUrl"));
  });

  it("Scenario: I want to check logout", () => {
    //WHEN
    hamburgerMenu.clickLogout();

    //THEN
    hamburgerMenu.assertUserIsNotLogin();
  });

  it("Scenario: I want to reset app state", () => {
    //GIVEN
    inventoryPage.open();

    //AND
    inventoryPage.addOrDeleteItemToCartByItsName("Sauce Labs Backpack");

    //WHEN
    hamburgerMenu.openHamburgerMenu();
    hamburgerMenu.clickResetAppState();

    //THEN
    inventoryPage.assertLackOfElInCart();
  });

  it("Scenario: I want to check redirector to about", () => {
    //THEN
    hamburgerMenu.assertAboutButton();
  });
});
