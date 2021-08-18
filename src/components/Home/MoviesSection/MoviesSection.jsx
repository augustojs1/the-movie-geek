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
import UpcomingMovies from './MovieFilter/UpcomingMovies';

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

        <NavLink to="/upcoming-movies" activeClassName="current">
          <li>Upcoming Movies</li>
        </NavLink>

        <NavLink to="/genre" activeClassName="current">
          <li>Genre</li>
        </NavLink>
      </NavigationLinks>
    </MovieSectionNav>
    <MovieCardsWrapper>
      <Routes>
        <Route exact path="/" element={<TrendingMovies />} />
        <Route exact path="/top-rated" element={<TopRatedMovies />} />
        <Route exact path="/upcoming-movies" element={<UpcomingMovies />} />
        <Route exact path="/genre" element={<MoviesGenreDropdown />} />
      </Routes>
    </MovieCardsWrapper>
  </MovieSectionWrapper>
);

export default MoviesSection;
