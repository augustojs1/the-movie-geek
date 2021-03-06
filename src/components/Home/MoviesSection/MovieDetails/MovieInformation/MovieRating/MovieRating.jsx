import React from 'react';
import PropTypes from 'prop-types';
import RatingWrapper from './styles';

const MovieRating = ({ rating }) => {
  function getMovieRatingColor(ratingNumber) {
    if (ratingNumber >= 7) {
      return 'green';
    }
    if (ratingNumber < 7 && ratingNumber >= 6) {
      return '#FFC300';
    }
    return 'red';
  }

  const ratingColor = getMovieRatingColor(Number(rating));

  return <RatingWrapper ratingColor={ratingColor}>{rating}</RatingWrapper>;
};

MovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default MovieRating;
