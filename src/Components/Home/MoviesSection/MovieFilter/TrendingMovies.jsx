import React from 'react';
import useAxios from '../../../../Hooks/useAxios';
import { GET_TRENDING, POSTER_URL } from '../../../../Services/api';
import MovieCard from '../MovieCard/MovieCard';
import { MovieCardsWrapper } from './styles';

const TrendingMovies = () => {
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getTrendingMovies() {
      const url = GET_TRENDING();
      await request(url);
    }
    if (data) console.log(data.results);
    getTrendingMovies();
  }, [request]);

  if (error) return 'Error';
  if (loading) return 'Loading';
  if (data)
    return (
      <MovieCardsWrapper>
        {data &&
          data.results.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              posterUrl={POSTER_URL + movie.poster_path}
              originalTitle={movie.original_title}
            />
          ))}
      </MovieCardsWrapper>
    );
  return null;
};

export default TrendingMovies;
