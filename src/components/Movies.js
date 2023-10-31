import React from 'react';
import { movies } from '../data';

function Movies() {
  const movieList = movies.map((movie, index) => (
    <li key={index}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre, i) => (
          <li key={i}>{genre}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {movieList}
      </ul>
    </div>
  );
}

export default Movies;
