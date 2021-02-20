import React, { useEffect, useState, useRef } from 'react';

export default function UpdateNote(props) {
	const [note, setNote] = useState({});
	const noteInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/notes/${props.match.params.id}`);
				const data = await response.json();
				setNote(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			const response = await fetch(`/api/notes/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					note: noteInput.current.value,
					parkID: props.match.params.id
				})
			});
			const data = await response.json();
			setNote(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="update-note" style={{ backgroundColor: '#7c904c' }}>
			<h1>{note.note}</h1>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					Note:
					<input type="text" ref={noteInput} defaultValue="" />
				</label>
				<input type="submit" value="Update Notes" />
			</form>
		</div>
	);
}
