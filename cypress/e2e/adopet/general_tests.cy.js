/// <reference types="cypress" />

describe('General tests to AdoPet', () => {
  it('Access "Ver pets disponíveis para adoção" page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  });

  it('Access header buttons pages', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
   
    cy.get('.header__home').click();
    cy.get('.header__message').click();
  });

  it('Access /login page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
   
    cy.get('[data-test="login-button"]').click();
  });

  it('Clicks on "Falar com o responsável" button', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    
    cy.contains('a', 'Ver pets disponíveis para adoção').click();

    cy.get('[aria-label="Falar com responsável"]').eq(3).click();
  });
})