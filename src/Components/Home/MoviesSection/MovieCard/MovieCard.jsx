import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MoviePoster from './styles';

const MovieCard = ({ movieId, posterUrl, originalTitle }) => (
  <>
    <Link to={`/movie-details/${movieId}`}>
      <MoviePoster src={posterUrl} alt={originalTitle} />
    </Link>
  </>
);

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
  posterUrl: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
};

export default MovieCard;
