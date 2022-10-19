import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
