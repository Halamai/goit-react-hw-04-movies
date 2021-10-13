import { useEffect, useState } from "react";
import { fetchMuvieBySearchName } from "../services/movies-api";
import RenderMovie from "../Components/renderMovie/RenderMovie";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [nameFilm, setFilm] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    // console.log(parsed);
    if (parsed.query) {
      fetchMuvieBySearchName(parsed.query)
        .then((films) => setFilms(films))
        .catch((error) => console.dir(error));
      setFilm(parsed.query);
    }
  }, []);

  const inputChange = (e) => {
    setFilm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetchMuvieBySearchName(nameFilm)
      .then((res) => setFilms(res))
      .catch((error) => console.log(error));

    history.push({ pathname: location.pathname, search: `query=${nameFilm}` });
  };

  return (
    <header>
      <form onSubmit={onFormSubmit}>
        <input
          value={nameFilm}
          onChange={inputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Film"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <RenderMovie movies={films} />
    </header>
  );
};

export default MoviesPage;
