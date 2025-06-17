/// <reference types="cypress" />

import { users } from '../../fixtures/users.json'

describe('User registration tests', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  });

  users.forEach(user => {
    it('Register many users successfully', () => {
      cy.registerNewUser(user.name, user.email, user.password);
    });
  });
});