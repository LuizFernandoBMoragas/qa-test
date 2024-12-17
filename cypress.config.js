const { defineConfig } = require("cypress");
require("dotenv").config();

const { addCucumberPreprocessorPlugin } = require("cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: process.env.CYPRESS_BASE_URL,
  },
});
