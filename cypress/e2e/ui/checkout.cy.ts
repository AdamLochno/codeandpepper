import CartPage from "../../pages/cart.page";
import InventoryPage from "../../pages/inventoryPage";
import CheckOutStepOne from "../../pages/checkoutStepOne.page";
import CheckOutStepTwo from "../../pages/checkoutStepTwo.page";
import CheckoutComplete from "../../pages/checkoutComplete.page";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutStepOne = new CheckOutStepOne();
const checkoutStepTwo = new CheckOutStepTwo();
const checkoutComplete = new CheckoutComplete();

describe("As a user I want to verify login to application", () => {
  beforeEach(() => {
    inventoryPage.assertCookieIsEmpty();
    inventoryPage.setCookieForStandardUser();
    inventoryPage.open();
  });

  it("Scenario: I want to buy Sauce Labs Bike Light", () => {
    //GIVEN
    inventoryPage.addElementToCart("Sauce Labs Bike Light");
    inventoryPage.openCart();

    //WHEN
    cartPage.verfiyElementsVisibility();
    cartPage.checkInformation();
    cartPage.clickCheckout();

    //THEN
    checkoutStepOne.verfiyElementsVisibility();
    checkoutStepOne.checkFormValidation();
    checkoutStepTwo.verfiyElementsVisibility();
    checkoutStepTwo.assertDataCorrect();
    checkoutStepTwo.clickFinish();
    checkoutComplete.verfiyElementsVisibility();
    checkoutComplete.assertDataPresentedCorrectly();
  });

  it("Scenario: I want to cancel checkout from step 1", () => {
    //GIVEN
    inventoryPage.addElementToCart("Sauce Labs Bike Light");
    inventoryPage.openCart();

    //WHEN
    cartPage.verfiyElementsVisibility();
    cartPage.checkInformation();
    cartPage.clickCheckout();

    //THEN
    checkoutStepOne.cancelCheckout();
  });

  it("Scenario: I want to cancel checkout from step 2", () => {
    //GIVEN
    inventoryPage.addElementToCart("Sauce Labs Bike Light");
    inventoryPage.openCart();

    //WHEN
    cartPage.verfiyElementsVisibility();
    cartPage.checkInformation();
    cartPage.clickCheckout();

    //THEN
    checkoutStepOne.verfiyElementsVisibility();
    checkoutStepOne.typeFormWithCorrectData();
    checkoutStepOne.clickContinueBtn();
    checkoutStepTwo.verfiyElementsVisibility();
    checkoutStepTwo.cancelCheckout();
  });
});
