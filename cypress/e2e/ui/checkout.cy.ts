import CartPage from "../../pages/cart.page";
import InventoryPage from "../../pages/inventoryPage";
import CheckOutS1 from "../../pages/checkoutS1.page";
import CheckOutS2 from "../../pages/checkoutS2.page";
import CheckoutComplete from "../../pages/checkoutComplete.page";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutS1 = new CheckOutS1();
const checkoutS2 = new CheckOutS2();
const checkoutComplete = new CheckoutComplete();

describe("As a user I want to verify login to application", () => {
  beforeEach(() => {
    cy.getCookies().should("be.empty");
    inventoryPage.setCookieForStandardUser();
    inventoryPage.open();
  });

  it("Scenario: I want to buy Sauce Labs Bike Light", () => {
    //GIVEN
    inventoryPage.addOrDeleteItemToCartByItsName("Sauce Labs Bike Light");
    inventoryPage.openCart();

    //WHEN
    cartPage.smokeTest();
    cartPage.checkInformation();
    cartPage.clickCheckout();

    //THEN
    checkoutS1.smokeTest();
    checkoutS1.testForm();
    checkoutS2.smokeTest();
    checkoutS2.assertDataCorrect();
    checkoutS2.clickFinish();
    checkoutComplete.smokeTest();
    checkoutComplete.assertDataPresentedCorrectly();
  });

  it("Scenario: I want to cancel checkout from step 1", () => {
    //GIVEN
    inventoryPage.addOrDeleteItemToCartByItsName("Sauce Labs Bike Light");
    inventoryPage.openCart();

    //WHEN
    cartPage.smokeTest();
    cartPage.checkInformation();
    cartPage.clickCheckout();

    //THEN
    checkoutS1.cancelCheckout();
  });

  it("Scenario: I want to cancel checkout from step 2", () => {
    //GIVEN
    inventoryPage.addOrDeleteItemToCartByItsName("Sauce Labs Bike Light");
    inventoryPage.openCart();

    //WHEN
    cartPage.smokeTest();
    cartPage.checkInformation();
    cartPage.clickCheckout();

    //THEN
    checkoutS1.smokeTest();
    checkoutS1.typeForm();
    checkoutS1.clickContinue();
    checkoutS2.smokeTest();
    checkoutS2.cancelCheckout();
  });
});
