/// <reference types="cypress" />

describe('User registration', () => {
  it('Registers a new user sucessfully', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type('Laura Regina');
    cy.get('[data-test="input-email"]').type('laura.r@gmail.com');
    cy.get('[data-test="input-password"]').type('Adopet##12');
    cy.get('[data-test="input-confirm-password"]').type('Adopet##12');

    cy.get('[data-test="submit-button"]').click();
  });

  it('Displays messages error for empty required fields', () => {


  })
})