import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';
import { GlobalContext } from '../../../../../contexts/GlobalContext';

const AddToWatchListButton = ({ movieId, title }) => {
  const global = React.useContext(GlobalContext);
  const watchlistMovie = { id: movieId, title };

  function handleClick() {
    global.setWatchlist((watchlist) => [...watchlist, watchlistMovie]);
    localStorage.setItem('watchlist', JSON.stringify(global.watchlist));
  }

  return <Button onClick={handleClick}>+ Watchlist</Button>;
};

AddToWatchListButton.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddToWatchListButton;
