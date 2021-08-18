import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
export const BACKGROUND_URL = 'https://image.tmdb.org/t/p/original';

export const api = axios.create({
  baseURL: API_URL,
});

export function SEARCH_MOVIE(movie) {
  const url = `/search/movie?api_key=${API_KEY}&query=${movie}&page=1`;
  return url;
}

export function GET_TRENDING() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  return url;
}

export function GET_TOP_RATED() {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;
  return url;
}

export function GET_UPCOMING() {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`;
  return url;
}

export function GET_MOVIE(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  return url;
}

export function GET_CAST(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  return url;
}

export function GET_SIMILAR_MOVIES(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&page=1`;
  return url;
}

export function GET_MOVIE_BY_GENRE(id) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;
  return url;
}

export function GET_TRAILER_BY_MOVIE_ID(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  return url;
}
