import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
import { fetchMoviesCast } from "../../services/movies-api.js";

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMoviesCast(id).then(({ cast }) => {
      setCast(cast);
      // console.log(cast);
    });
  }, []);

  return (
    <>
      <h2>Cast</h2>
      <ul>
        {cast && cast.length ? (
          cast.map((item) => (
            <li key={item.id}>
              {item.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                  alt=""
                />
              )}

              {item.name}

              <p>Character: {item.character}</p>
            </li>
          ))
        ) : (
          <h2>We don't have any reviews for this movie</h2>
        )}
      </ul>
    </>
  );
};

export default Cast;
