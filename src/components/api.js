import axios from 'axios';

const authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = authorization;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.params = {
  language: 'en-US',
};

export const fetchTrendingMov = async () => {
  const response = await axios.get('trending/all/day');
  return response.data.results;
};

export const fetchMovie = async movieId => {
  const fetchedMovie = await axios.get(`movie/${movieId}`);
  return fetchedMovie.data;
};

export const searchMovie = async movieName => {
  const fetchSearchMovies = await axios.get(`search/movie?query=${movieName}`);
  return fetchSearchMovies.data.results;
};

export const fetchCast = async movieId => {
  const fetchedMovieCast = await axios.get(`movie/${movieId}/credits`);
  return fetchedMovieCast.data.cast;
};

export const fetchReviews = async movieId => {
  const fetchedReviews = await axios.get(`movie/${movieId}/reviews`);
  return fetchedReviews.data.results;
};
