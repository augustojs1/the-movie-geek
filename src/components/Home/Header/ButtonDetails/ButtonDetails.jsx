import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';

const ButtonDetails = ({ movieId }) => {
  function handleClick() {
    console.log('click!');
  }

  return <Button onClick={handleClick}>Details</Button>;
};

ButtonDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default ButtonDetails;
