import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';
import { GlobalContext } from '../../../../../contexts/GlobalContext';

const AddToWatchListButton = ({ movieId, title }) => {
  const global = React.useContext(GlobalContext);

  return (
    <Button
      onClick={() => {
        const watchlistMovie = { id: movieId, title };
        global.setWatchlist([...global.watchlist, watchlistMovie]);
        console.log(global.watchlist);
      }}
    >
      + Watchlist
    </Button>
  );
};

AddToWatchListButton.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddToWatchListButton;
