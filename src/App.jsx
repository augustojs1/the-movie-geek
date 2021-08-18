import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import MovieDetails from './Components/Home/MoviesSection/MovieDetails/MovieDetails';

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
