import React from 'react';
import { Link } from 'react-router-dom';
import { MovieSectionWrapper, MovieSectionNav } from './styles';

const MovieSection = () => (
  <MovieSectionWrapper>
    <MovieSectionNav>
      <Link to="/trending">Trending</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/new-arrivals">New Arrivals</Link>
      <Link to="/genre">Genre</Link>
    </MovieSectionNav>
  </MovieSectionWrapper>
);

export default MovieSection;
