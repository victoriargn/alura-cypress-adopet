/// <reference types="cypress" />

describe('API Adopet tests', () => {

  it('Check if body contains the correct user name', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/a922e8e6-6766-48b6-bc75-ec7e6559fbde',
      headers: Cypress.env()

    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('perfil')
      expect(res.body.perfil.nome).to.be.equal('Laura Regina')
    })
  });

  it('Check if messages sent by user are displayed successfully in the screen', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/a922e8e6-6766-48b6-bc75-ec7e6559fbde',
      headers: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('msg')
    })
  });

  it('Check if the 401 status code is returned by not sending authorization header', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/a922e8e6-6766-48b6-bc75-ec7e6559fbde',
      headers: '',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.equal(401)
      expect(res.body.message).to.equal('Erro de autenticação')
      expect(res.body.error).to.equal('Unauthorized')
    })
  });
});