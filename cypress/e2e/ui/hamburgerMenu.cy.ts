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
  });

  it("Scenario: I want to check redirector to all items", () => {
    //GIVEN
    hamburgerMenu.smokeTest();

    //WHEN

    //THEN
  });
});
