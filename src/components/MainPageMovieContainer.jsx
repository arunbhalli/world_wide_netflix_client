import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import axios from 'axios'

const MainPageMovieContainer = () => {
	const [tenMovies, setTenMovies] = useState([])

	async function fetchData() {
		await axios.get('https://worldwidenetflix.herokuapp.com/**').then((res) => {
			const movies = res.data.results
			setTenMovies(movies)
		})
	}

	useEffect(() => {
		fetchData()
	})

	return (
		<Container data-cy='movie-container'>
			{tenMovies.map((tenMovie) => (
				<div>{tenMovie.title} Rating: {tenMovie.imdbrating}</div>
				
			))}
		</Container>
	)
}

export default MainPageMovieContainer
