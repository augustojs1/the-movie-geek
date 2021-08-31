/* eslint-disable react/prop-types */
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
<<<<<<< HEAD
  const [watchlist, setWatchlist] = React.useState();
=======
  const [watchlist, setWatchlist] = React.useState([]);
>>>>>>> watchlist

  return (
    <GlobalContext.Provider value={{ watchlist, setWatchlist }}>
      {children}
    </GlobalContext.Provider>
  );
};
