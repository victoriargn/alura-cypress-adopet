/// <reference types="cypress" />

describe('User login tests', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();

    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode: 400
    }).as('stubPost')
  });

  it('Fail even sending correct crecentials', () => {
    const user = Cypress.env('user');
    
    cy.logUserIn(user.user_email, user.user_password);
    cy.wait('@stubPost');

    cy.get('.error').contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  });
});