import InventoryPage from "../../pages/inventoryPage";
const inventoryPage = new InventoryPage();

describe("As a user I want to verify inventory page", () => {
  beforeEach(() => {
    inventoryPage.assertCookieIsEmpty();
    inventoryPage.setCookieForStandardUser();
    inventoryPage.open();
  });

  it("Scenario: I want to add element to cart", () => {
    //GIVEN
    inventoryPage.verfiyElementsVisibility();

    //WHEN
    inventoryPage.addElementToCart("Sauce Labs Backpack");

    //THEN
    inventoryPage.assertRemoveBtnAppearred();
    inventoryPage.assertAmounOfElInCart(1);
  });

  it("Scenario: I want to remove element from cart", () => {
    //GIVEN
    inventoryPage.verfiyElementsVisibility();

    //WHEN
    inventoryPage.addElementToCart("Sauce Labs Backpack");
    inventoryPage.assertAmounOfElInCart(1);

    //THEN
    inventoryPage.removeElementFromCart("Sauce Labs Backpack");
    inventoryPage.assertLackOfElInCart();
  });

  it("Scenario: I want to verify working of sorting elements", () => {
    //THEN
    inventoryPage.assertSortingWorks();
  });
});
