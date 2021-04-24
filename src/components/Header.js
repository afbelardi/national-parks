import React from 'react';
import Typist from 'react-typist';

export default function Header(props) {
	return (
		<div className="header">
			<img
				className="header-img"
				src="https://www.scti.co.nz/-/media/project/scti/nz/images/travel-advice/best-national-parks-usa/usa-national-parks-header-1440x300.jpg?rev=b09ebea7648b452ba1983d5f6dfe7ca9"
			/>
			<Typist>
				<h1 id="national-park-title">National Parks Guide</h1>
			</Typist>
			<Typist>
				<h1 id="national-park-mirror">National Parks Guide</h1>
			</Typist>
		</div>
	);
}
