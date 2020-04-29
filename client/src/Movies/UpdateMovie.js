import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = (props) => {
	const [movie, setMovie] = useState();

	// useEffect is used to avoid initialization of useState() before movies gets populated
	// very first time the component is rendered props is undefined
	useEffect(() => {
		const selectedMovie = props.movies.find((movie) => {
			return `${movie.id}` === props.match.params.id;
		});
		if (selectedMovie) {
			setMovie(selectedMovie);
		}
	}, [props.movies, props.match.params.id]);

	const changeHandler = (e) => {
		let value = e.target.value;
		setMovie({ ...movie, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
			.then(() => {
				props.getMovieList();
				props.history.push('/');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="movie-card">
			{movie && (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={movie.title}
						name="title"
						onChange={changeHandler}
					/>
					<input
						type="text"
						value={movie.director}
						name="director"
						onChange={changeHandler}
					/>
					<input
						type="text"
						value={movie.metascore}
						name="metascore"
						onChange={changeHandler}
					/>

					<input
						className="movie-star"
						value={movie.stars}
						name="stars"
						onChange={changeHandler}
					/>

					<button>Save Changes</button>
				</form>
			)}
		</div>
	);
};

export default UpdateMovie;
