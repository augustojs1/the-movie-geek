import React from 'react';
import PropTypes from 'prop-types';
import { BACKGROUND_URL } from '../../../Services/api';
import { HeaderWrapper } from './styles';

const Header = ({ backdropPath, id, originalTitle, overview }) => {
  console.log(backdropPath, id, originalTitle, overview);

  return (
    <HeaderWrapper backgroundUrl={BACKGROUND_URL + backdropPath}>
      <h1>{originalTitle}</h1>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  backdropPath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  originalTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Header;
