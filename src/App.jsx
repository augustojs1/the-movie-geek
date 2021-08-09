import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import MoviesSection from './Components/Home/MoviesSection/MoviesSection';

import MovieDetails from './Components/Home/MoviesSection/MovieDetails/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <MoviesSection />
      <Routes>
        <Route path="/movie-details" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
