import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/movies-api.js";
import RenderMovie from "../renderMovie/RenderMovie.js";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then((films) => setMovies(films));
  }, []);

  return <RenderMovie movies={movies} />;
};

export default HomePage;
