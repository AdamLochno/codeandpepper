import LoginPage from "../../pages/loginPage";
import InventoryPage from "../../pages/inventoryPage";
import HamburgerMenu from "../../pages/hamburgerMenu.page";

const loginPage = new LoginPage();
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
    //GIVEN

    //WHEN
    hamburgerMenu.goToAllItems();

    //THEN
    hamburgerMenu.assertUrl(Cypress.env("inventoryUrl"));
  });

  it("Scenario: I want to check redirector to about", () => {
    //GIVEN

    //WHEN
    hamburgerMenu.goToAbout();

    //THEN
    hamburgerMenu.assertUrl(Cypress.env("aboutUrl"));
  });

  it("Scenario: I want to check logout", () => {
    //GIVEN

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
});
