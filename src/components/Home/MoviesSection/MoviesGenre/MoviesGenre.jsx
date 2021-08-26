import React from 'react';
import { useParams } from 'react-router-dom';
import MovieGenreIds from '../../../../utils/MovieGenreIds';
import useAxios from '../../../../hooks/useAxios';
import { GET_MOVIES_BY_GENRE, POSTER_URL } from '../../../../services/api';
import {
  MovieGenreWrapper,
  MovieGenreTitle,
  MoviesGenreCardsWrapper,
} from './styles';
import Error from '../../../Helper/Error/Error';
import Loading from '../../../Helper/Loading/Loading';
import MovieCard from '../MovieCard/MovieCard';

const MoviesGenre = () => {
  const params = useParams();
  const { data, loading, error, request } = useAxios();
  const maxResults = 20;

  React.useEffect(() => {
    async function getMoviesByGenreId(genreId) {
      const url = GET_MOVIES_BY_GENRE(genreId);
      await request(url);
    }

    getMoviesByGenreId(MovieGenreIds[params.genre]);
  }, [params, request]);

  if (error) return <Error errorLog={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <MovieGenreWrapper>
        <MovieGenreTitle>{params.genre} Movies</MovieGenreTitle>
        <MoviesGenreCardsWrapper>
          {data &&
            data.results
              .slice(0, maxResults)
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  movieId={movie.id}
                  posterUrl={POSTER_URL + movie.poster_path}
                  originalTitle={movie.title}
                />
              ))}
        </MoviesGenreCardsWrapper>
      </MovieGenreWrapper>
    );
  return null;
};

export default MoviesGenre;
