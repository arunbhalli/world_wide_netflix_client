import React, { useState } from 'react'
// import { Container } from 'semantic-ui-react'
import axios from 'axios'
const MainPageMovieContainer = () => {
	const [tenMovies, setTenMovies] = useState

	MovieIndex=async() => {
		axios.get('/https://worldwidenetflix.herokuapp.com/**').then((response) => {
			setTenMovies({ movies: response.results })
		})
    	}

	return (
		<Container id={}>

		</Container>
	)

}

export default MainPageMovieContainer
