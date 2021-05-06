import React, { useState, useEffect } from 'react'
import { Card, Container, Image, Grid } from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'

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
		<Container>
				<Grid data-cy='movie-container'>
			<Grid.Row columns={5} stretched padded>
				{tenMovies.map((tenMovie) => (
					<Grid.Column>
						<Card>
							<Image src={tenMovie.img} />
							<Card.Content>
								<Card.Header>{tenMovie.title}</Card.Header>
								<Card.Description>
									Rating: {_.round(tenMovie.avgrating, 1)}
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				))}
			</Grid.Row>
		</Grid>
		</Container>
	
	)
}

export default MainPageMovieContainer
