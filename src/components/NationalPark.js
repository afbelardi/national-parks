import React from 'react';
import { Link } from 'react-router-dom';

export default function NationalPark(props) {
	return (
		<div className={'column'} style={{ overflow: 'scroll' }}>
			{Object.keys(props.data).length
				? props.data.map(park => {
						return (
							<div className="parks-container">
								<div key={park.fullName} className="park-preview">
									<Link to={`/park/${park.parkCode}`}>
										<h1 id="park-name">{park.fullName}</h1>
									</Link>
									<h2>Description:</h2>
									<p>{park.description}</p>
									<img src={park.images[0].url}></img>
								</div>
							</div>
						);
				  })
				: ''}

			{/* <div>
				<img src={props.movie.Poster} />
			</div> */}
		</div>
	);
}
