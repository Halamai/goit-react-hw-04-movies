import React, { Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { getMovieById } from "../../services/movies-api";
import Cast from "../cast/Cast";
import Navigation from "../navigation/Navigation";
import Reviews from "../reviews/Reviews";
import { moviesRoutes } from "../routes/moviesRoutes";

const MovieDetailsPage = ({ match, history, location }) => {
  const [movie, setMovie] = useState({});
  const [from, setFrom] = useState("");
  // console.log(from);

  // console.log(parsed);

  useEffect(() => {
    getMovieById(match.params.movieId).then((muvie) => setMovie(muvie));
  }, []);
  useEffect(() => {
    location.state?.from && setFrom(location.state.from);
  }, [location.state]);
  // console.log(movie);

  return (
    <>
      <button type="button" onClick={() => history.push(from || `/`)}>
        back to Home
      </button>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
      )}
      <h2>
        {movie.title}
        {`(${movie.release_date})`}
      </h2>
      <h2>
        Overview:
        <p>{movie.overview}</p>
      </h2>
      <h2>Genres</h2>

      {movie.genres &&
        movie.genres.map((genry) => <li key={genry.name}>{genry.name}</li>)}
      <h2>User score: {movie.vote_average}</h2>

      <Navigation routes={moviesRoutes} match={match.url} />
      <Suspense fallback={<h2>.....loading</h2>}>
        <Switch>
          {/* {moviesRoutes.map((route) => (
            <Route
              id={match.params.movieId}
              path={match.url + route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            />
          ))} */}
          <Route path={`/movies/${match.params.movieId}/cast`}>
            <Cast id={match.params.movieId} />
          </Route>
          <Route path={`/movies/${match.params.movieId}/reviews`}>
            <Reviews id={match.params.movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
