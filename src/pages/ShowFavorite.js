import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ShowFavorite(props) {
	const [favoritePark, setFavoritePark] = useState({});
	const [image, setImage] = useState([]);
	const [entranceFees, setEntranceFees] = useState([]);
	const [didDelete, setDidDelete] = useState(false);

	// const [activities, setActivities] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`api/nationalpark/${props.match.params.id}`
				);
				const data = await response.json();
				setFavoritePark(data);
				setImage(data.images);
				setEntranceFees(data.entranceFees);
				// setActivities(data.activities);
			} catch (err) {
				console.error(err);
			}
		})();
	}, [didDelete]);

	const handleDelete = async event => {
		try {
			const response = await fetch(
				`/api/nationalpark/${props.match.params.id}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			const data = response.json();
			setDidDelete(!didDelete);
		} catch (error) {
			console.log(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div className="parks-container">
			<div key={favoritePark.fullName} className="park-info">
				<Link to={`/`}>
					<h3 style={{ textAlign: 'center' }} id="park-name">
						Home
					</h3>
				</Link>
				<h1>{favoritePark.fullName}</h1>
				<button onClick={handleDelete}>Delete From Favorites</button>
				<Link to={`/${favoritePark._id}/edit`}>
					<h3>Update Favorites</h3>
				</Link>
				<h2 style={{ textAlign: 'center', marginTop: '20px' }}>Description:</h2>
				<div className="description">
					<p style={{ width: '50%', textAlign: 'center' }} id="description">
						{favoritePark.description}
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
							{favoritePark.directionsInfo}
						</p>
					</main>
					<main className="weather">
						<h4 style={{ textAlign: 'center' }}>Weather Info:</h4>
						<p style={{ textAlign: 'center' }}>{favoritePark.weatherInfo}</p>
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
					{/* <div className="activities">
						<h4 style={{ textAlign: 'center' }}>Activities</h4> */}
					{/* {activities.map(activity => {
							return <p style={{ textAlign: 'center' }}>{activity.name}</p>;
						})} */}
					{/* </div> */}
				</div>

				<hr></hr>

				<footer>
					<a style={{ textAlign: 'center' }} href={favoritePark.url}>
						Park's website
					</a>
				</footer>
			</div>
		</div>
	);
}
