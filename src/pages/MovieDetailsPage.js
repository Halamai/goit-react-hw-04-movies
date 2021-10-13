import React, { Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { getMovieById } from "../../src/services/movies-api";
import Cast from "../Components/cast/Cast";
// import Cast from "../cast/Cast";
import Navigation from "../../src/Components/navigation/Navigation";
import Reviews from "../Components/reviews/Reviews";
import { moviesRoutes } from "../../src/Components/routes/moviesRoutes";
import AboutMuvieInfo from "../Components/aboutMuvieInfo/AboutMuvieInfo";

const MovieDetailsPage = ({ match, history, location }) => {
  const [movie, setMovie] = useState(null);
  const [from, setFrom] = useState("");

  useEffect(() => {
    getMovieById(match.params.movieId)
      .then((muvie) => setMovie(muvie))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    location.state?.from && setFrom(location.state.from);
  }, [location.state]);

  return (
    <>
      <button type="button" onClick={() => history.push(from || `/`)}>
        back to Home
      </button>
      {movie && <AboutMuvieInfo movie={movie} />}
      <Navigation routes={moviesRoutes} match={match.url} />
      <Suspense fallback={<h2>.....loading</h2>}>
        <Switch>
          <Route path={`${match.path}${match.params.movieId}/cast`}>
            <Cast id={match.params.movieId} />
          </Route>
          <Route path={`${match.path}${match.params.movieId}/reviews`}>
            <Reviews id={match.params.movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
