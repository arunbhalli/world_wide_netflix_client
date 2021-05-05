import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

const MainPageMovieContainer = () => {
	const [tenMovies, setTenMovies] = useState

	MovieIndex(() => {
		axios.get('/https://worldwidenetflix.herokuapp.com/**').then((response) => {
      debugger
			setTenMovies({ movies: response.results })
		})

    tenMoviesList = tenMovies.map(() => {
      <Container id={}>

      </Container>

    })
    
	})
	return 
}

export default MainPageMovieContainer
