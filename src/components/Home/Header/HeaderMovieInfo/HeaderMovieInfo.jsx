import React from 'react';
import PropTypes from 'prop-types';
import {
  TrendingMovieWrapper,
  TrendingMovieTitle,
  ButtonDetails,
  TrendingMovieOverview,
} from './styles';

const HeaderMovieInfo = ({ originalTitle, overview }) => (
  <TrendingMovieWrapper>
    <TrendingMovieTitle>{originalTitle}</TrendingMovieTitle>
    <TrendingMovieOverview>{overview}</TrendingMovieOverview>
    <ButtonDetails>Details</ButtonDetails>
  </TrendingMovieWrapper>
);

HeaderMovieInfo.propTypes = {
  originalTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default HeaderMovieInfo;
