import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Show(props) {
	const [park, setPark] = useState({});

	const [image, setImage] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [entranceFees, setEntranceFees] = useState([]);
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`https://developer.nps.gov/api/v1/parks?parkCode=${props.match.params.id}&api_key=d9f8hSWGmSo610C7sPRvMbrlarUrSUmThuAW5r8j`
				);

				const data = await response.json();
				setPark(data.data[0]);
				setImage(data.data[0].images);
				setEntranceFees(data.data[0].entranceFees);
				setActivities(data.data[0].activities);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			const response = await fetch('/api/nationalpark/favorites', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					fullName: park.fullName,
					description: park.description
				})
			});
			const data = await response.json();
			setFavorites([...favorites, data]);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/favorites');
		}
	};

	return (
		<div className="parks-container">
			<div key={park.fullName} className="park-info">
				<Link to={`/`}>
					<h3 style={{ textAlign: 'center' }} id="park-name">
						Home
					</h3>
				</Link>
				<h1>{park.fullName}</h1>
				<button onClick={handleSubmit}>Add to Favorites</button>
				<h2 style={{ textAlign: 'center', marginTop: '20px' }}>Description:</h2>
				<div className="description">
					<p style={{ width: '50%', textAlign: 'center' }} id="description">
						{park.description}
					</p>
				</div>
				<hr />
				<div className="image-container">
					{image.map(image => {
						return <img className="show-page-image" src={image.url} />;
					})}
				</div>
				<hr style={{ color: 'black' }}></hr>
				<div className="direction-weather-container">
					<main className="directions">
						<h4 style={{ textAlign: 'center' }}>Directions:</h4>
						<p id="direction-p" style={{ textAlign: 'center' }}>
							{park.directionsInfo}
						</p>
					</main>
					<main className="weather">
						<h4 style={{ textAlign: 'center' }}>Weather Info:</h4>
						<p style={{ textAlign: 'center' }}>{park.weatherInfo}</p>
					</main>
				</div>
				<div className="fees-activities">
					<main className="entrance-fees">
						{entranceFees.map(fee => {
							return (
								<section>
									<p style={{ textAlign: 'center' }}>${fee.cost}</p>
									<p style={{ textAlign: 'center' }}>{fee.description}</p>
								</section>
							);
						})}
					</main>
					<div className="activities">
						<h4 style={{ textAlign: 'center' }}>Activities</h4>
						{activities.map(activity => {
							return <p style={{ textAlign: 'center' }}>{activity.name}</p>;
						})}
					</div>
				</div>

				<hr></hr>
				<footer>
					<a style={{ textAlign: 'center' }} href={park.url}>
						Park's website
					</a>
				</footer>
			</div>
		</div>
	);
}
