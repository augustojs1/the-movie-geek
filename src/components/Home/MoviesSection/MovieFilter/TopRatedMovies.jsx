import React from 'react';
import useAxios from '../../../../hooks/useAxios';
import { GET_TOP_RATED, POSTER_URL } from '../../../../services/api';
import MovieCard from '../MovieCard/MovieCard';
import { MovieCardsWrapper, PaginationWrapper } from './styles';
import Loading from '../../../Helper/Loading/Loading';
import Error from '../../../Helper/Error/Error';
import Pagination from '../Pagination/Pagination';
import usePagination from '../../../../hooks/usePagination';

const TopRatedMovies = () => {
  const { page, setPage } = usePagination();
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getTopRatedMovies() {
      const url = GET_TOP_RATED(page);
      await request(url);
    }
    if (data) console.log(data.results);
    getTopRatedMovies();
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

export default TopRatedMovies;
