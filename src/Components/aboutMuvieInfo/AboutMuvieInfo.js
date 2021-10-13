import React from "react";

const AboutMuvieInfo = ({ movie }) => {
  return (
    <>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
      )}
      <h2>
        {movie.title}
        {movie.release_date && ` ${movie.release_date.substring(0, 4)} `}
      </h2>
      <h2>
        Overview:
        <p>{movie.overview}</p>
      </h2>
      <h2>Genres</h2>

      {movie.genres &&
        movie.genres.map((genry) => <li key={genry.name}>{genry.name}</li>)}
      <h2>User score: {movie.vote_average}</h2>
    </>
  );
};

export default AboutMuvieInfo;
