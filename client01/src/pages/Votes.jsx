import React, { useState, useEffect } from 'react';

function VotingPage({ category }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`https://test-api-j081.onrender.com/${category}`);
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [category]);

  const handleVote = (event) => {
    const selectedMovie = event.target.value;
    // handle voting logic here
  };

  return (
    <div>
      <h1>{category} Movies</h1>
      <form>
        {movies.map((movie) => (
          <div key={movie.id}>
            <label>
              <input type="radio" name="movie" value={movie.id} onChange={handleVote} />
              {movie.title}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default VotingPage;
