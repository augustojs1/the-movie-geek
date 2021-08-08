import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import MoviesSection from './Components/Home/MoviesSection/MoviesSection';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <MoviesSection />
    </BrowserRouter>
  );
}

export default App;
