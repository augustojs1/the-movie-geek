import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ backdropPath, id, originalTitle, overview }) => {
  console.log(backdropPath, id, originalTitle, overview);

  return (
    <header>
      <p />
    </header>
  );
};

Header.propTypes = {
  backdropPath: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  originalTitle: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Header;
