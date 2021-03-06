/* eslint-disable react/prop-types */
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [watchlist, setWatchlist] = React.useState([]);

  return (
    <GlobalContext.Provider value={{ watchlist, setWatchlist }}>
      {children}
    </GlobalContext.Provider>
  );
};
