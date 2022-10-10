import LoginPage from "../../pages/loginPage";
const loginPage = new LoginPage();

describe("My First Test", () => {
  it("Does not do much!", () => {
    loginPage.visitAndLogin();
  });
});
