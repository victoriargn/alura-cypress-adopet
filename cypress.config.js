const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
      json: false,
      timestamp: "ddmmyyyy_HHMMss"
    }
  },
});
