import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SavedList({ list }) {
	return (
		<div className="saved-list">
			<h3>Saved Movies:</h3>
			<div className="saved-wrapper">
				{list.map((movie) => {
					return (
						<NavLink
							to={`/movies/${movie.id}`}
							key={movie.id}
							activeClassName="saved-active"
							className="saved-movie"
						>
							<span className="saved-movie">{movie.title}</span>
						</NavLink>
					);
				})}
			</div>
			<div className="nav-buttons">
				<div className="home-button">
					<Link className="link" to="/">
						Home
					</Link>
				</div>
				<div className="add-button">
					<Link className="link" to="/add-movie">
						Add Movie
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SavedList;
