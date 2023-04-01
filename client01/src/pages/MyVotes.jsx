import React, { useState, useEffect } from 'react';

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.category}</p>
        <p className="card-text">{movie.year}</p>
        <p className="card-text">{movie.director}</p>
      </div>
    </div>
  );
}

function MyVotes() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('http://127.0.0.1:3000/show');
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1>Movies</h1>
      <div className="card-deck">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MyVotes;
