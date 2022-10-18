import LoginPage from "../../pages/loginPage";
const loginPage = new LoginPage();

describe("As a user I want to verify login to application", () => {
  beforeEach(() => {
    loginPage.open();
  });

  it("Scenario: I want to login with success", () => {
    //WHEN
    loginPage.login(Cypress.env("standardUsername"), Cypress.env("password"));

    //THEN
    loginPage.assertLoginWithSuccess();
  });

  it("Scenario: I want to try login with failure", () => {
    //WHEN
    loginPage.login(Cypress.env("lockedUsername"), Cypress.env("password"));

    //THEN
    loginPage.assertLoginWithFailure();
  });
});
