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
			.then((res) => {
				console.log(res.data);
				clearState();
				props.history.push('/');
				props.getMovieList();
			})
			.catch((err) => console.log(err));

		setNewMovie(initialState);
	};

	const clearState = () => {
		setNewMovie({ ...initialState });
	};

	return (
		<div className="add-movie">
			<h2>Add movie to the list:</h2>
			<form onSubmit={addMovie}>
				<label>
					Name:{' '}
					<input
						type="text"
						name="title"
						value={newMovie.title}
						onChange={handleChange}
					/>
				</label>
				<label>
					Director:{' '}
					<input
						type="text"
						name="director"
						value={newMovie.director}
						onChange={handleChange}
					/>
				</label>
				<label>
					Metascore:
					<input
						type="number"
						name="metascore"
						value={newMovie.metascore}
						onChange={handleChange}
					/>
				</label>
				<label>
					Stars:
					<input
						type="text"
						name="stars"
						value={newMovie.stars}
						onChange={handleChange}
					/>
				</label>
				<button>Submit Form</button>
			</form>
		</div>
	);
};

export default AddMovie;
