import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

const MainPageMovieContainer = () => {
	const [tenMovies, setTenMovies] = useState({});

	async function fetchData() {
		const res = await axios.get('https://worldwidenetflix.herokuapp.com/**');
		res.then((res) => {
			setTenMovies(res.data.title);
		});
	}

	useEffect(() => {
		fetchData();
	});

	return <Container>{JSON.stringify(tenMovies)}</Container>;
};

export default MainPageMovieContainer;
