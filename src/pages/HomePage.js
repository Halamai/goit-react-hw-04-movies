import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/movies-api";
import RenderMovie from "../../src/Components/renderMovie/RenderMovie";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies()
      .then((films) => setMovies(films))
      .catch((error) => console.log(error));
  }, []);

  return <RenderMovie movies={movies} />;
};

export default HomePage;
