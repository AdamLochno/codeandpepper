import LoginPage from "../../pages/loginPage";
import InventoryPage from "../../pages/inventoryPage";
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe("As a user I want to verify login to application", () => {
  beforeEach(() => {
    cy.getCookies().should("be.empty");
    inventoryPage.setCookieForStandardUser();
    inventoryPage.open();
  });

  it("Scenario: I want to add element to cart", () => {
    //GIVEN
    inventoryPage.smokeTest();

    //WHEN
    inventoryPage.addOrDeleteItemToCartByItsName("Sauce Labs Backpack");

    //THEN
    inventoryPage.assertRemoveBtnAppearred();
    inventoryPage.assertAmounOfElInCart(1);
  });

  it("Scenario: I want to remove element from cart", () => {
    //GIVEN
    inventoryPage.smokeTest();

    //WHEN
    inventoryPage.addOrDeleteItemToCartByItsName("Sauce Labs Backpack");
    inventoryPage.assertAmounOfElInCart(1);

    //THEN
    inventoryPage.addOrDeleteItemToCartByItsName("Sauce Labs Backpack");
    inventoryPage.assertLackOfElInCart();
  });
});
