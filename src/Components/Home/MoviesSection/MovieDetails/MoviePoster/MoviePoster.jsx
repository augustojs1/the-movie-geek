import React from 'react';
import PropTypes from 'prop-types';

const MoviePoster = ({ posterUrl, posterAlt }) => (
  <img src={posterUrl} alt={posterAlt} />
);

MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  posterAlt: PropTypes.string.isRequired,
};

export default MoviePoster;
