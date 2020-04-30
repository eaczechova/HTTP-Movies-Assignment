import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
	return (
		<div className="movieList__wrapper">
			{movies.map((movie) => (
				<Link key={movie.id} to={`/movies/${movie.id}`} className="link">
					<MovieCard movie={movie} />
				</Link>
			))}
		</div>
	);
}

export default MovieList;
