import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MovieDetails from './components/Home/MoviesSection/MovieDetails/MovieDetails';

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
