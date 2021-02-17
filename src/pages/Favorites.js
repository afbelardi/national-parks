import React, { useState, useEffect } from 'react';

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
		<div className="favorite-container">
			<h1 style={{ textAlign: 'center' }}>Favorites</h1>
			{favorites.map(favorite => {
				return (
					<div className="favorite-post">
						<div className="parks-container">
							<div key={favorite.fullName} className="park-preview">
								<h1 id="park-name">{favorites.fullName}</h1>
								<h2>Description:</h2>
								<p>{favorite.description}</p>
								{/* <img src={favorites.images[0].url}></img> */}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
