import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';

const AddToWatchListButton = ({ movieId }) => {
  function handleClick() {
    console.log(`Added movie ID ${movieId} to watchlist!`);
  }

  return <Button onClick={handleClick}>+ Watchlist</Button>;
};

AddToWatchListButton.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default AddToWatchListButton;
