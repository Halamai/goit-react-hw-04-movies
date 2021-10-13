const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "28a3a1a55be29248c28e2fe727538aaf";

export const fetchTrendingMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("error____");
      }
    })
    .then((data) => data.results);
};
export const fetchMuvieBySearchName = (searchName) => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchName}`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("error___");
      }
    })
    .then((data) => data.results);
};
export const getMovieById = (movieId) => {
  return fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("error___");
    }
  });
};
export const fetchMoviesCast = (movieId) => {
  return fetch(`
    ${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US
  `).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("error____");
    }
  });
};

export const fetchMoviesRevievs = (movieId) => {
  return fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("error____");
      }
    })
    .then((data) => data.results);
};
