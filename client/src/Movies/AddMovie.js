import React, { useState } from 'react';
import axios from 'axios';

const initialState = {
	title: '',
	director: '',
	metascore: '',
	stars: '',
};
const AddMovie = (props) => {
	const [newMovie, setNewMovie] = useState(initialState);

	const handleChange = (e) => {
		let value = e.target.value;
		setNewMovie({ ...newMovie, [e.target.name]: value });
	};

	const addMovie = (e) => {
		e.preventDefault();

		if (newMovie.stars) {
			let starsList = newMovie.stars.split(',');
			newMovie.stars = starsList;
		}

		axios
			.post('http://localhost:5000/api/movies', newMovie)
			.then(() => {
				props.getMovieList();
				props.history.push('/');
			})
			.catch((err) => console.log(err));

		setNewMovie(initialState);
	};

	return (
		<div className="add-movie">
			<h2>Add movie to the list:</h2>
			<form onSubmit={addMovie}>
				<input
					type="text"
					name="title"
					value={newMovie.title}
					onChange={handleChange}
					placeholder="Movie title"
				/>

				<input
					type="text"
					name="director"
					value={newMovie.director}
					onChange={handleChange}
					placeholder="Director"
				/>

				<input
					type="number"
					name="metascore"
					value={newMovie.metascore}
					onChange={handleChange}
					placeholder="Score"
				/>

				<input
					type="text"
					name="stars"
					value={newMovie.stars}
					onChange={handleChange}
					placeholder="Stars names separeted with comma"
				/>

				<button>Add</button>
			</form>
		</div>
	);
};

export default AddMovie;
