describe('User can become a Subscriber', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: 'GET',
        url: 'https://worldwidenetflix.herokuapp.com/api/movies/',
        response: 'fixture:top100Movies.json',
      });
      cy.route({
        methode: 'POST',
        url: 'https://worldwidenetflix.herokuapp.com/api/auth',
        response: 'fixture:user_registration.json',
      });
      cy.visit('/');
      cy.get('[data-cy=login-btn]').click();
      cy.get('[data-cy=registration-email-input]').type('user@gmail.com');
      cy.get('[data-cy=registration-password]').type('password');
      cy.get('[data-cy=registration-confirmation-password]').type('password');
      cy.get('[data-cy=form-register-btn]').click();
      cy.get('[data-cy=close-login-modal]').click();
    });
    it('by filling in the correct card details', () => {
      cy.get('[data-cy=subscribe-btn]').click();
      cy.get('[data-cy=payment-form]').should("exist");
    });
  });
});
