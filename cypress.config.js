const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const webpack = require('@cypress/webpack-preprocessor');
require("dotenv").config();

module.exports = defineConfig({
  env: {
    TAGS: 'not @not-automated',
  },
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        webpack({
          webpackOptions: {
            resolve: {
              extensions: ['.ts', '.js'],
            },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: process.env.CYPRESS_BASE_URL,
    stepDefinitions: 'cypress/e2e/**/*.{js,ts}',
    supportFile: "cypress/support/e2e.js",
  },
});
