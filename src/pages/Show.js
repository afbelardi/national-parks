import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Show(props) {
	const [park, setPark] = useState({});
	console.log(props);
	useEffect(() => {
		(async () => {
			try {
				console.log(props);
				const response = await fetch(
					`https://developer.nps.gov/api/v1/parks?parkCode=${props.match.params.id}&api_key=d9f8hSWGmSo610C7sPRvMbrlarUrSUmThuAW5r8j`
				);

				const data = await response.json();
				setPark(data.data[0]);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<div className="parks-container">
			<div key={park.fullName} className="park-preview">
				<Link to={`/park/${park.id}`}>
					<h1 id="park-name">{park.fullName}</h1>
				</Link>
				<h2>Description:</h2>
				<p>{park.description}</p>
			</div>
		</div>
	);
}
