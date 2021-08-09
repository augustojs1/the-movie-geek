import React from 'react';
import PropTypes from 'prop-types';

import MoviePoster from './styles';

const MovieCard = ({ posterUrl, originalTitle }) => (
  <>
    <a href="/">
      <MoviePoster src={posterUrl} alt={originalTitle} />
    </a>
  </>
);

MovieCard.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
};

export default MovieCard;
