import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard.jsx";
//548dce4b
const API_URL = "http://www.omdbapi.com?apikey=548dce4b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  useEffect(() => {
    searchMovies("Shrek");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  // console.log(movies[0]);
  return (
    <div className="app">
      <h1>MoviesList</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => {
            setSearchterm(e.target.value);
          }}
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => {
            searchMovies(searchterm);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
