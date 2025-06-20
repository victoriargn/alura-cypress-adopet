/// <reference types="cypress" />

describe('Home page tests', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  });

  it('Access message page by clicking on one of "Falar com o responsável" buttons', () => {
    const user = Cypress.env('user');
    cy.logUserIn(user.user_email, user.user_password);

    cy.get('[aria-label="Falar com responsável"]').should('be.visible').eq(3).click();

    cy.get('.message').contains('Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:')
      .should('be.visible');
  });
});