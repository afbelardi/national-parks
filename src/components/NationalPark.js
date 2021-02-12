import React from 'react';

export default function NationalPark(props) {
	return (
		<div className={'column'} style={{ overflow: 'scroll' }}>
			{Object.keys(props.data).length
				? props.data.map((park, index) => {
						return (
							<div key={park.fullName}>
								<h1>{park.fullName}</h1>
								<h2>Description: {park.description}</h2>
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
