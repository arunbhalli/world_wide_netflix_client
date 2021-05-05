describe('Visitor can see top 10 movies', () => {
	before(() =>
		cy.intercept('https://worldwidenetflix.herokuapp.com/', {
			fixture: 'top10movies.json',
		})
	)

	it('is expected to opend the main page', () => {
		cy.visit('/')
	})

	it('is expected to show a list of top 10 global movies', () => {
		cy.get('[data-cy=movie-container]').within(() => {
			cy.get('data-cy=movie-1').should('contain', 'No Festival')
      
		})
	})
})
