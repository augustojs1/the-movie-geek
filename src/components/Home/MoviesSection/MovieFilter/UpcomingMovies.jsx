import React from 'react';
import useAxios from '../../../../hooks/useAxios';
import { GET_UPCOMING, POSTER_URL } from '../../../../services/api';
import MovieCard from '../MovieCard/MovieCard';
import { MovieCardsWrapper } from './styles';

const UpcomingMovies = () => {
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getUpcomingMovies() {
      const url = GET_UPCOMING();
      await request(url);
    }
    getUpcomingMovies();
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

export default UpcomingMovies;
