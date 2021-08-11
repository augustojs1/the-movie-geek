import React from 'react';
import PropTypes from 'prop-types';
import { MovieInformationWrapper, MovieTitle, Paragraph } from './styles';
import MovieRating from './MovieRating/MovieRating';

const MovieInformation = ({ title, overview, releaseDate, rating }) => {
  function getReleaseYear(movieReleaseDate) {
    return movieReleaseDate.slice(0, 4);
  }

  const releaseYear = getReleaseYear(releaseDate);

  return (
    <MovieInformationWrapper>
      <MovieTitle>{`${title && title} (${releaseYear})`}</MovieTitle>
      <Paragraph>{overview && overview}</Paragraph>
      <MovieRating rating={rating} />
    </MovieInformationWrapper>
  );
};

MovieInformation.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default MovieInformation;
