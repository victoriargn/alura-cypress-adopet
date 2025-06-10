// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
Cypress.Commands.add('registerNewUser', (name, email, password) => {
  cy.get('[data-test="input-name"]').type(name);
  cy.get('[data-test="input-email"]').type(email);
  cy.get('[data-test="input-password"]').type(password);
  cy.get('[data-test="input-confirm-password"]').type(password);

  cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add('logUserIn', (email, password) => {
  cy.get('[data-test="input-loginEmail"]').type(email);
  cy.get('[data-test="input-loginPassword"]').type(password);
  cy.get('[data-test="submit-button"]').click();
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })