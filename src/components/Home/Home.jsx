import React from 'react';
import Header from './Header/Header';
import useAxios from '../../hooks/useAxios';
import { GET_TRENDING } from '../../services/api';
import MoviesSection from './MoviesSection/MoviesSection';

const Home = () => {
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getRandomTrendingMovie() {
      const url = GET_TRENDING();
      await request(url);
    }
    if (data) console.log(data.results);
    getRandomTrendingMovie();
  }, [request]);

  const randomMovieIndex = Math.floor(Math.random() * 10);

  if (error) return 'Error';
  if (loading) return 'Loading';
  if (data)
    return (
      <>
        <Header
          backdropPath={data.results[randomMovieIndex].backdrop_path}
          id={data.results[randomMovieIndex].id}
          originalTitle={data.results[randomMovieIndex].original_title}
          overview={data.results[randomMovieIndex].overview}
        />
        <MoviesSection />
      </>
    );
  return null;
};

export default Home;
