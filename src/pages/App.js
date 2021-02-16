import React, { useState, useEffect } from 'react';
import NationalPark from '../components/NationalPark';
import Header from '../components/Header';
// import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import AppRouter from '../router/index';

export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'https://developer.nps.gov/api/v1/',
		option: 'parks?',
		stateCode: 'stateCode=',
		state: '',
		apiKey: '&api_key=' + 'd9f8hSWGmSo610C7sPRvMbrlarUrSUmThuAW5r8j',
		searchURL: ''
	});

	const [park, setPark] = useState([]);

	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await setPark(data.data);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'https://developer.nps.gov/api/v1/',
						option: 'parks?',
						stateCode: 'stateCode=',
						state: '',
						apiKey: '&api_key=' + 'd9f8hSWGmSo610C7sPRvMbrlarUrSUmThuAW5r8j',
						searchURL: ''
					});
				}
			}
		})();
	}, [query]);

	const handleChange = event => {
		updateQuery({
			...query,
			...{
				[event.target.id]: event.target.value
			}
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		updateQuery({
			...query,
			searchURL:
				query.baseURL +
				query.option +
				query.stateCode +
				query.state +
				query.apiKey
		});
	};

	return (
		<div className="AppPage" id="parallax">
			<Header />
			<form onSubmit={handleSubmit}>
				<label htmlFor="state"> State</label>
				<input
					id="state"
					type="text"
					value={query.state}
					onChange={handleChange}
				/>
				<input type="submit" value="Find National Parks" />
			</form>
			{Object.keys(park).length ? <NationalPark data={park} /> : ''}
		</div>
	);
	// return <AppRouter />;
}
