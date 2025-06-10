/// <reference types="cypress" />

describe('User login tests', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  });

  it('Display the home page after the user successfully logs in', () => {
    cy.logUserIn('laura.r@gmail.com', 'Adopet##12');

    cy.url({ timeout: 20000 }).should('eq', 'https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.cards').should('be.visible');
  });

  it('Doesn\'t log the user in by enter wrong credentials', () => {
    cy.logUserIn('laura@', '11d');

    cy.get('.error').contains('Por favor, verifique o email digitado').should('be.visible');
    cy.get('.error').contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres')
      .should('be.visible');
  });
});