import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function Movie({ addToSavedList, history, getMovieList }) {
	const [movie, setMovie] = useState(null);
	const params = useParams();

	const fetchMovie = (id) => {
		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then((res) => setMovie(res.data))
			.catch((err) => console.log(err.response));
	};

	const saveMovie = () => {
		addToSavedList(movie);
	};

	useEffect(() => {
		fetchMovie(params.id);
	}, [params.id]);

	if (!movie) {
		return <div>Loading movie information...</div>;
	}

	const deleteMovie = (id) => {
		axios.delete(`http://localhost:5000/api/movies/${id}`).then((res) => {
			getMovieList();
			history.push('/');
		});
	};

	return (
		<div className="save-wrapper">
			<MovieCard movie={movie} />
			<div className="buttons-wrapper">
				<div className="save-button" onClick={saveMovie}>
					Save
				</div>

				<div className="delete-button" onClick={() => deleteMovie(movie.id)}>
					Delete
				</div>

				<Link
					key={movie.id}
					to={`/update-movie/${movie.id}`}
					className="edit-button link"
				>
					Edit
				</Link>
			</div>
		</div>
	);
}

export default Movie;
