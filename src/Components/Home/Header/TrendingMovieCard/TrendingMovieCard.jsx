import React from 'react';
import PropTypes from 'prop-types';
import {
  TrendingMovieWrapper,
  TrendingMovieTitle,
  ButtonDetails,
  TrendingMovieOverview,
} from './styles';

const TrendingMovieCard = ({ backgroundUrl, id, originalTitle, overview }) => {
  console.log(backgroundUrl, id, originalTitle, overview);

  return (
    <TrendingMovieWrapper backgroundUrl={backgroundUrl}>
      <TrendingMovieTitle>{originalTitle}</TrendingMovieTitle>
      <TrendingMovieOverview>{overview}</TrendingMovieOverview>
      <ButtonDetails>Details</ButtonDetails>
    </TrendingMovieWrapper>
  );
};

TrendingMovieCard.propTypes = {
  backgroundUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  originalTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default TrendingMovieCard;
