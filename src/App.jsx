import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MovieDetails from './components/Home/MoviesSection/MovieDetails/MovieDetails';
import Footer from './components/Footer/Footer';
import { GlobalStorage } from './contexts/GlobalContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStorage>
          <NavigationBar />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
          </Routes>
        </GlobalStorage>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
