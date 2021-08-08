import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MovieSectionWrapper, MovieSectionNav } from './styles';
import TrendingMovies from './TrendingMovies/TrendingMovies';
import TopRatedMovies from './TopRatedMovies/TopRatedMovies';
import NewArrivalsMovies from './NewArrivalsMovies/NewArrivalsMovies';
import MoviesGenreDropdown from './MoviesGenre/MoviesGenreDropdown';

const MoviesSection = () => (
  <MovieSectionWrapper>
    <MovieSectionNav>
      <Link to="/trending">Trending</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/new-arrivals">New Arrivals</Link>
      <Link to="/genre">Genre</Link>
      <Routes>
        <Route path="/trending" element={<TrendingMovies />} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
        <Route path="/new-arrivals" element={<NewArrivalsMovies />} />
        <Route path="/genre" element={<MoviesGenreDropdown />} />
      </Routes>
    </MovieSectionNav>
  </MovieSectionWrapper>
);

export default MoviesSection;
