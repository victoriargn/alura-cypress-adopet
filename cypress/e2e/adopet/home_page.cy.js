describe('Home page tests', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  });

  it('Access message page by clicking on one of "Falar com o responsável" buttons', () => {
    cy.get('.button').contains('Ver pets disponíveis para adoção').click();
    cy.get('[aria-label="Falar com responsável"]').eq(3).click();

    cy.get('.message').contains('Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:')
      .should('be.visible');
  });
});