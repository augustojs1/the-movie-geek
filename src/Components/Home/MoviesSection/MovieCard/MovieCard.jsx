import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MoviePoster from './styles';

const MovieCard = ({ posterUrl, originalTitle }) => (
  <>
    <Link to="/movie-details">
      <MoviePoster src={posterUrl} alt={originalTitle} />
    </Link>
  </>
);

MovieCard.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
};

export default MovieCard;
