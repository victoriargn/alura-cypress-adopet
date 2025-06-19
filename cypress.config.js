const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
  projectId: "rzwik3",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      charts: true,
      html: true,
      json: true,
      timestamp: "ddmmyyyy_HHMMss"
    }
  },
});
