import React, { useState } from 'react';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState('');

    const addMovie = () => {
        setMovies([...movies, newMovie]);
        setNewMovie('');
    };

    return (
        <div>
            <h2>Movie List</h2>
            <input
                type="text"
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
            />
            <button onClick={addMovie}>Add Movie</button>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    );
}

function MoviesApp() {
    return (
        <div>
            <h1>Movie List App</h1>
            <MovieList />
        </div>
    );
}

export default MoviesApp;
