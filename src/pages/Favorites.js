import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Favorites(props) {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/nationalpark`);
				const data = await response.json();
				await setFavorites(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	return (
		<div className="FavoritesPage">
			<h1 style={{ textAlign: 'center' }}>Favorites</h1>
			<div className="favorite-post">
				{favorites.map(favorite => {
					return (
						<div className="favorite-parks-container">
							<Link to={`/${favorite._id}`}>
								<h1 id="park-name" style={{ textAlign: 'center' }}>
									{favorite.fullName}
								</h1>
							</Link>
							<h2 style={{ textAlign: 'center' }}>Description:</h2>
							<p>{favorite.description}</p>
							<img src={favorite.images[0].url}></img>
						</div>
					);
				})}
			</div>
		</div>
	);
}
