import React from 'react';
import { Button, WatchListDropwdownMenu, WatchListItem } from './styles';
import { GlobalContext } from '../../../contexts/GlobalContext';

const MyWatchListButton = () => {
  const global = React.useContext(GlobalContext);
  const i = 1;
  return (
    <>
      <Button>My Watchlist</Button>
      <WatchListDropwdownMenu>
        {global.watchlist &&
          global.watchlist.map((movie, index) => (
            <WatchListItem key={movie}>
              <a href="!#">{movie}</a>
            </WatchListItem>
          ))}
      </WatchListDropwdownMenu>
    </>
  );
};

export default MyWatchListButton;
