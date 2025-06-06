/// <reference types="cypress" />

describe('User registration tests', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  });

  it('Register a new user sucessfully', () => {
    cy.get('[data-test="input-name"]').type('Laura Regina');
    cy.get('[data-test="input-email"]').type('laura.r@gmail.com');
    cy.get('[data-test="input-password"]').type('Adopet##12');
    cy.get('[data-test="input-confirm-password"]').type('Adopet##12');

    cy.get('[data-test="submit-button"]').click();

    // Add assertion
  });

  it('Display messages error for empty required fields', () => {
    cy.get('[data-test="submit-button"]').click();

    cy.get('.error').contains('É necessário informar um endereço de email').should('be.visible');
    cy.get('.error').contains('Crie uma senha').should('be.visible');
    cy.get('.error').contains('Repita a senha criada acima').should('be.visible');
  });
})