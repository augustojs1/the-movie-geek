import React from 'react';
import PropTypes from 'prop-types';
import MoviePosterDetail from './styles';

const MoviePoster = ({ posterUrl, posterAlt }) => (
  <MoviePosterDetail src={posterUrl} alt={posterAlt} />
);

MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  posterAlt: PropTypes.string.isRequired,
};

export default MoviePoster;
