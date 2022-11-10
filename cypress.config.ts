import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {},
  },
});
