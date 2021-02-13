import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Show(props) {
	const [park, setPark] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`props.query.searchURL/${park.id}`);
				const data = await response.json();
				setPark(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);
}
