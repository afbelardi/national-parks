import React, { useState, useEffect } from 'react';

export default function App(props) {
	const [query, updateQuery] = useState({
		baseURL: 'https://developer.nps.gov/api/v1/',
		option: 'parks?',
		stateCode: 'stateCode=',
		state: '',
		apiKey: '&api_key=' + 'd9f8hSWGmSo610C7sPRvMbrlarUrSUmThuAW5r8j',
		searchURL: ''
	});

	const [park, setPark] = useState({});

	useEffect(() => {
		(async () => {
			if (query.searchURL) {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					await setPark(data);
				} catch (error) {
					console.error(error);
				} finally {
					updateQuery({
						baseURL: 'https://developer.nps.gov/api/v1/',
						option: 'parks?',
						stateCode: 'stateCode=',
						state: '',
						apiKey: 'api_key=' + 'd9f8hSWGmSo610C7sPRvMbrlarUrSUmThuAW5r8j',
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
			searchURL: query.baseURL + query.option + query.stateCode + query.state + query.apiKey 
		});
	};

	return (
		<div className="AppPage">
			<h1>National Parks Guide</h1>
		</div>
	);
}
