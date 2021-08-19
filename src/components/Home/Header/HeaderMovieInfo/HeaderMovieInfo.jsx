import React from 'react';
import PropTypes from 'prop-types';
import {
  TrendingMovieWrapper,
  TrendingMovieTitle,
  TrendingMovieOverview,
} from './styles';
import ButtonDetails from '../ButtonDetails/ButtonDetails';

const HeaderMovieInfo = ({ id, originalTitle, overview }) => (
  <TrendingMovieWrapper>
    <TrendingMovieTitle>{originalTitle}</TrendingMovieTitle>
    <TrendingMovieOverview>{overview}</TrendingMovieOverview>
    <ButtonDetails movieId={id}>Details</ButtonDetails>
  </TrendingMovieWrapper>
);

HeaderMovieInfo.propTypes = {
  id: PropTypes.number.isRequired,
  originalTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default HeaderMovieInfo;
