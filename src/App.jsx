import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import TrendingMovies from './Components/Home/MoviesSection/TrendingMovies/TrendingMovies';
import TopRatedMovies from './Components/Home/MoviesSection/TopRatedMovies/TopRatedMovies';
import NewArrivalsMovies from './Components/Home/MoviesSection/NewArrivalsMovies/NewArrivalsMovies';
import MoviesGenreDropdown from './Components/Home/MoviesSection/MoviesGenre/MoviesGenreDropdown';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/trending" element={<TrendingMovies />} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
        <Route path="/new-arrivals" element={<NewArrivalsMovies />} />
        <Route path="/genre" element={<MoviesGenreDropdown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
