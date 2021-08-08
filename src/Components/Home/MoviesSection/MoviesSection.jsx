import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import {
  MovieSectionWrapper,
  MovieSectionNav,
  MovieCardsWrapper,
  NavigationLinks,
} from './styles';
import TrendingMovies from './MovieFilter/TrendingMovies';
import TopRatedMovies from './MovieFilter/TopRatedMovies';
import MoviesGenreDropdown from './MovieFilter/MoviesGenreDropdown';
import NewArrivalsMovies from './MovieFilter/NewArrivalsMovies';

const MoviesSection = () => (
  <MovieSectionWrapper>
    <MovieSectionNav>
      <NavigationLinks>
        <NavLink to="/" end activeClassName="current">
          <li>Trending</li>
        </NavLink>

        <NavLink to="/top-rated" activeClassName="current">
          <li>Top Rated</li>
        </NavLink>

        <NavLink to="/new-arrivals" activeClassName="current">
          <li>New Arrivals</li>
        </NavLink>

        <NavLink to="/genre" activeClassName="current">
          <li>Genre</li>
        </NavLink>
      </NavigationLinks>
    </MovieSectionNav>
    <MovieCardsWrapper>
      <Routes>
        <Route path="/" element={<TrendingMovies />} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
        <Route path="/new-arrivals" element={<NewArrivalsMovies />} />
        <Route path="/genre" element={<MoviesGenreDropdown />} />
      </Routes>
    </MovieCardsWrapper>
  </MovieSectionWrapper>
);

export default MoviesSection;
