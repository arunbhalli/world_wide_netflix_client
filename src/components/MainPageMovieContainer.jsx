import React, { useState, useEffect } from 'react';
import { Card, Container, Image, Grid } from 'semantic-ui-react';
import axios from 'axios';
import _ from 'lodash';
import he from 'he';

const MainPageMovieContainer = () => {
	const [topTenMovies, setTopTenMovies] = useState([]);
	const [errorMessage, setErrorMessage] = useState();
	const fetchMovieData = async () => {
		try {
			const response = await axios.get('/movies');
			setTopTenMovies(response.data.results);
		} catch (error) {
			if (error.response.status === 500) {
				setErrorMessage(
					'Please try again later, our servers are currently not responding'
				);
			} else {
				setErrorMessage(error.message);
			}
		}
	};

	useEffect(() => {
		fetchMovieData();
	}, []);

	return (
		<Container>
			<Grid>
				<Grid.Row columns={5} stretched padded>
					{topTenMovies.map((movie, i) => (
						<Grid.Column data-cy='movie-container'>
							<Card data-cy={`movie-${i}`}>
								<Image src={movie.img} />
								<Card.Content>
									<Card.Header data-cy='title-header'>
										{he.decode(movie.title)}
									</Card.Header>
									<Card.Description>
										Rating: {_.round(movie.avgrating, 1)}
									</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
			{errorMessage && <h1 data-cy='error-message'>{errorMessage}</h1>}
		</Container>
	);
};

export default MainPageMovieContainer;
