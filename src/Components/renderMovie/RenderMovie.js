import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const RenderMovie = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default RenderMovie;
