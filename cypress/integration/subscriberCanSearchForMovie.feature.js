describe('subscriber can search for movie by typing query param in the field', () => {
  describe('successfully', () => {
    before(() => {
      cy.intercept(
        'GET',
        'https://worldwidenetflix.herokuapp.com/api/movies/?query=godfather',
        {
          fixture: 'godfather.json',
        }
      );
    });

    it('is expected to show Godfather movie', () => {
      cy.get('[data-cy=search-input]').type('godfather')
      cy.get('[data-cy=search-btn]').click()

      cy.get('[data-cy=movie-container]').find('img').should('have.length', 1);
      cy.get('[data-cy=movie-container]').within(() => {
        cy.get('[data-cy=movie-0]').within(() => {
          cy.get('[data-cy=title-header]').should(
            'contain',
            'The Godfather'
          );
          cy.get('[data-cy=flag-list]').find('i').should('have.length', 10);
          cy.get('[data-cy=netflix-link]').should('have.attr', 'href').and('equal', 'https://netflix.com/title/60011152')
        });
      })
    })
  })
})
