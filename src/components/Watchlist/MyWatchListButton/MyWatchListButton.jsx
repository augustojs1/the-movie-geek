import React from 'react';
import { Button, WatchListDropwdownMenu, WatchListItem } from './styles';

const MyWatchListButton = () => (
  <>
    <Button>My Watchlist</Button>
    <WatchListDropwdownMenu>
      <WatchListItem>
        <a href="!#">Django</a>
      </WatchListItem>
      <WatchListItem>
        <a href="!#">Pulp Fiction</a>
      </WatchListItem>
      <WatchListItem>
        <a href="!#">Kill Bill</a>
      </WatchListItem>
      <WatchListItem>
        <a href="!#">Inglorious Basterds</a>
      </WatchListItem>
    </WatchListDropwdownMenu>
  </>
);

export default MyWatchListButton;
