import React from 'react';
import useAxios from '../../../../hooks/useAxios';
import { GET_TRENDING, POSTER_URL } from '../../../../services/api';
import MovieCard from '../MovieCard/MovieCard';
import { MovieCardsWrapper, PaginationWrapper } from './styles';
import Loading from '../../../Helper/Loading/Loading';
import Error from '../../../Helper/Error/Error';
import Pagination from '../Pagination/Pagination';
import usePagination from '../../../../hooks/usePagination';

const TrendingMovies = () => {
  const { page, setPage } = usePagination();

  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getTrendingMovies() {
      const url = GET_TRENDING(page);
      await request(url);
    }

    getTrendingMovies();
  }, [request, page]);

  if (error) return <Error errorLog={error} />;
  if (loading) return <Loading />;
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
        <PaginationWrapper>
          <Pagination setPage={setPage} />
        </PaginationWrapper>
      </MovieCardsWrapper>
    );
  return null;
};

export default TrendingMovies;
