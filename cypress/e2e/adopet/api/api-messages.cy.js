/// <reference types="cypress" />

describe('API Adopet tests', () => {
  const authorization = Cypress.env('authorization');
  const user = Cypress.env('user');

  it('Check if body contains the correct user name', () => {
    cy.request({
      method: 'GET',
      url: `https://adopet-api-i8qu.onrender.com/adotante/perfil/${user.user_id}`,
      headers: { authorization }

    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('perfil')
      expect(res.body.perfil.nome).to.be.equal(user.user_name)
    })
  });

  it('Check if messages sent by user are displayed successfully in the screen', () => {

    cy.request({
      method: 'GET',
      url: `https://adopet-api-i8qu.onrender.com/mensagem/${user.user_id}`,
      headers: { authorization }
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('msg')
    })
  });

  it('Check if the 401 status code is returned by not sending authorization header', () => {
    cy.request({
      method: 'GET',
      url: `https://adopet-api-i8qu.onrender.com/mensagem/${user.user_id}`,
      headers: '',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.be.equal(401)
      expect(res.body.message).to.equal('Erro de autenticação')
      expect(res.body.error).to.equal('Unauthorized')
    })
  });
});