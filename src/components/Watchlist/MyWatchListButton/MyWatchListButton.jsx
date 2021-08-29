import React from 'react';
import { Button, WatchListDropwdownMenu, WatchListItem } from './styles';
import { GlobalContext } from '../../../contexts/GlobalContext';

const MyWatchListButton = () => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      <Button>My Watchlist</Button>
      <WatchListDropwdownMenu>
        {global.watchlist &&
          global.watchlist.map((movie) => (
            <WatchListItem key={movie.id}>
              <a href="!#">{movie.title}</a>
            </WatchListItem>
          ))}
      </WatchListDropwdownMenu>
    </>
  );
};

export default MyWatchListButton;
