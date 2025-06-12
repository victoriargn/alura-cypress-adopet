/// <reference types="cypress" />

describe('API Adopet tests', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhOTIyZThlNi02NzY2LTQ4YjYtYmM3NS1lYzdlNjU1OWZiZGUiLCJhZG9wdGVyTmFtZSI6IkxhdXJhIFJlZ2luYSIsImlhdCI6MTc0OTY4Njc0NCwiZXhwIjoxNzQ5OTQ1OTQ0fQ.d5sB5bS9bzN0QeA-surLpR34-pWjb5PLhxLpZoJMvqY`;

  it('Check if a sent message is displayed successfully in the screen', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/a922e8e6-6766-48b6-bc75-ec7e6559fbde',
      headers: { authorization }
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('msg')
    })
  });
});