import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MovieDetails from './components/Home/MoviesSection/MovieDetails/MovieDetails';
import Footer from './components/Footer/Footer';
import { GlobalStorage } from './contexts/GlobalContext';
import PageNotFound from './components/Helper/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <GlobalStorage>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
}

export default App;
