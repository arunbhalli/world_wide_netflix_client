describe('User can sign up', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'POST',
      url: 'https://worldwidenetflix.herokuapp.com/api/movies/?lat=55.7842&lon=12.4518',
      response: 'fixture:user_registration.json',
    });
    cy.visit('/');
  });

  describe('User can see register form', () => {
    it('is expected to show the registration form', () => {
      cy.get('[data-cy=login-btn]').click();
      cy.get('[data-cy=login-modal-header]').should('be.visible');
      cy.get('[data-cy=login-modal-content]').within(() => {
        cy.get('[data-cy=registration-email-input]').type(
          'bob.kramer@hotmail.com'
        );
        cy.get('[data-cy=registration-password]').type('password');
        cy.get('[data-cy=registration-confirmation-password]').type('password');
        cy.get('[data-cy=form-register-btn]').click();
        cy.get('[data-cy=success-message]').should('contain', 'Sucseccfull registration')
      });
    });
  });
});
