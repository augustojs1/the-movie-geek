import React from 'react';
import PropTypes from 'prop-types';
import { TrendingMovieWrapper, TrendingMovieTitle } from './styles';

const TrendingMovieCard = ({ backdropPath, id, originalTitle, overview }) => {
  console.log(backdropPath, id, originalTitle, overview);

  return (
    <TrendingMovieWrapper>
      <TrendingMovieTitle>{originalTitle}</TrendingMovieTitle>
      <p>{overview}</p>
    </TrendingMovieWrapper>
  );
};

TrendingMovieCard.propTypes = {
  backdropPath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  originalTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default TrendingMovieCard;
