import React from 'react';
import useAxios from '../../../../Hooks/useAxios';
import { GET_TOP_RATED, POSTER_URL } from '../../../../Services/api';
import MovieCard from '../MovieCard/MovieCard';
import { MovieCardsWrapper } from './styles';

const TopRatedMovies = () => {
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getTopRatedMovies() {
      const url = GET_TOP_RATED();
      await request(url);
    }
    if (data) console.log(data.results);
    getTopRatedMovies();
  }, []);

  if (error) return 'Error';
  if (loading) return 'Loading';
  if (data)
    return (
      <MovieCardsWrapper>
        {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            posterUrl={POSTER_URL + movie.poster_path}
            originalTitle={movie.original_title}
          />
        ))}
      </MovieCardsWrapper>
    );
  return null;
};

export default TopRatedMovies;
