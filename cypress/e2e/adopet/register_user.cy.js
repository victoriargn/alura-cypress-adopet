/// <reference types="cypress" />

describe('User registration tests', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  });

  it('Register a new user sucessfully', () => {
    cy.registerNewUser('Laura Regina','laura.r@gmail.com','Adopet##12');

    // Add assertion
  });

  it('Display messages error for empty required fields', () => {
    cy.get('[data-test="submit-button"]').click();

    cy.get('.error').contains('É necessário informar um endereço de email').should('be.visible');
    cy.get('.error').contains('Crie uma senha').should('be.visible');
    cy.get('.error').contains('Repita a senha criada acima').should('be.visible');
  });
})