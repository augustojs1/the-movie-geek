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
import Pagination from '../Pagination/Pagination';
import usePagination from '../../../../hooks/usePagination';

const MoviesGenre = () => {
  const params = useParams();
  const { page, setPage } = usePagination();
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getMoviesByGenreId(genreId) {
      const url = GET_MOVIES_BY_GENRE(genreId, page);
      await request(url);
    }

    getMoviesByGenreId(MovieGenreIds[params.genre]);
  }, [params, request, page]);

  if (error) return <Error errorLog={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <MovieGenreWrapper>
        <MovieGenreTitle>{params.genre} Movies</MovieGenreTitle>
        <MoviesGenreCardsWrapper>
          {data &&
            data.results
              .slice(0, 20)
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  movieId={movie.id}
                  posterUrl={POSTER_URL + movie.poster_path}
                  originalTitle={movie.title}
                />
              ))}
        </MoviesGenreCardsWrapper>
        <Pagination setPage={setPage} />
      </MovieGenreWrapper>
    );
  return null;
};

export default MoviesGenre;
