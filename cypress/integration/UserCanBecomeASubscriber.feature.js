describe('User can become a Subscriber', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/movies',
        response: 'fixture:top100Movies.json',
      });
      cy.route({
        methode: 'POST',
        url: 'http://localhost:3000/api/auth',
        response: 'fixture:user_registration.json',
      });
      cy.visit('/');
      cy.get('[data-cy=register]').click();
      cy.get('[data-cy=email-input]').type('user@gmail.com');
      cy.get('[data-cy=passwords]').type('password');
      cy.get('[data-cy=password-confirmation-input]').type('password');
      cy.get('[data-cy=register]').click();
    });
    it('by filling in the correct card details', () => {
      cy.get('[data-cy=become-subscriber]').click();
      cy.get('[data-cy=payment-form]').should("exist");
    });
  });
});
