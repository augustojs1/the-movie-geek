import React from 'react';
import PropTypes from 'prop-types';
import HeaderMovieInfo from './HeaderMovieInfo/HeaderMovieInfo';
import { BACKGROUND_URL } from '../../../services/api';
import { HeaderWrapper } from './styles';

const Header = ({ backdropPath, id, originalTitle, overview }) => (
  <HeaderWrapper backgroundUrl={BACKGROUND_URL + backdropPath}>
    <HeaderMovieInfo
      id={id}
      originalTitle={originalTitle}
      overview={overview}
    />
  </HeaderWrapper>
);

Header.propTypes = {
  backdropPath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  originalTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Header;
