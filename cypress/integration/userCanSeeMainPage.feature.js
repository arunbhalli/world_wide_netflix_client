describe('User can see main page', () => {
  before(() => 
  cy.visit('/')
  )

  it('is expected to show the header', () => {
    cy.get('[data-cy=header]').should('exist');
  });

  it('is expected to show the footer', () => {
    cy.get('[data-cy=footer]').should('exist');
  });
})






