import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

const MainPageMovieContainer = () => {
  debugger
	const [tenMovies, setTenMovies] = useState({});

	async function fetchData() {
		 await axios.get('https://worldwidenetflix.herokuapp.com/*')
		.then((res) => {
      debugger
			setTenMovies(res.data.results[1].title);
		});
	}

	useEffect(() => {
		fetchData();
	});

	return <Container>{JSON.stringify(tenMovies)}</Container>;
};

export default MainPageMovieContainer;
