import React from 'react';
import PropTypes from 'prop-types';
import {
  TrendingMovieWrapper,
  TrendingMovieTitle,
  ButtonDetails,
  TrendingMovieOverview,
} from './styles';

const TrendingMovieCard = ({ id, originalTitle, overview }) => {
  console.log(id, originalTitle, overview);

  return (
    <TrendingMovieWrapper>
      <TrendingMovieTitle>{originalTitle}</TrendingMovieTitle>
      <TrendingMovieOverview>{overview}</TrendingMovieOverview>
      <ButtonDetails>Details</ButtonDetails>
    </TrendingMovieWrapper>
  );
};

TrendingMovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  originalTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default TrendingMovieCard;
