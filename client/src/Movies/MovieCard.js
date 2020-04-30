import React from 'react';

const MovieCard = (props) => {
	const { title, director, metascore, stars } = props.movie;
	return (
		<div className="movie__card">
			<h2 className="movie__title">{title}</h2>
			<div className="movie__director">
				Director: <em>{director}</em>
			</div>
			<div className="movie__metascore">
				Metascore: <strong>{metascore}</strong>
			</div>
			<h3>Actors</h3>

			{stars.length > 0 ? (
				stars.map((star) => (
					<div key={star} className="movie__star">
						{star}
					</div>
				))
			) : (
				<p>Loading stars list...</p>
			)}
		</div>
	);
};

export default MovieCard;
