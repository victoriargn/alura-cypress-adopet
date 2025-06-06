/// <reference types="cypress" />

describe('Initial page tests', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('Click on "Ver pets disponíveis para adoção" button', () => {
    cy.get('.button').contains('Ver pets disponíveis para adoção').click();
  });

  it('Click on header home button', () => {
    cy.get('.header__home').click();
  });

  it('Click on header message button', () => {
    cy.get('.header__message').click();
  });

  it('Access login page', () => {
    cy.get('[data-test="login-button"]').click();
  });
})