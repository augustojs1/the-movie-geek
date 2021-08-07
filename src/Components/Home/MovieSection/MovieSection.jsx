import React from 'react';
import { MovieSectionWrapper, MovieSectionNav } from './styles';

const MovieSection = () => (
  <MovieSectionWrapper>
    <MovieSectionNav>
      <ul>
        <li>
          <a href="/trending">Trending</a>
        </li>
        <li>
          <a href="/top-rated">Top Rated</a>
        </li>
        <li>
          <a href="/new-arrivals">New Arrivals</a>
        </li>
        <li>
          <a href="/genre">Genre</a>
        </li>
      </ul>
    </MovieSectionNav>
  </MovieSectionWrapper>
);

export default MovieSection;
