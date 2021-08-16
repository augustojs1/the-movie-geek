import React from 'react';
import PropTypes from 'prop-types';
import useAxios from '../../../../../Hooks/useAxios';
import { GET_SIMILAR_MOVIES, POSTER_URL } from '../../../../../Services/api';
import Loading from '../../../../Helper/Loading/Loading';
import Error from '../../../../Helper/Error/Error';
import {
  SimilarMoviesWrapper,
  SimilarMoviesTitle,
  SimilarMoviesCardWrapper,
} from './styles';
import MovieCard from '../../MovieCard/MovieCard';

const SimilarMoviesSection = ({ movieId }) => {
  const { data, loading, error, request } = useAxios();
  const similarMoviesFetchLimit = 4;

  React.useEffect(() => {
    async function getSimilarMovies(id) {
      const url = GET_SIMILAR_MOVIES(id);
      await request(url);
    }

    getSimilarMovies(movieId);
  }, [request]);

  if (error) return <Error errorLog={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <SimilarMoviesWrapper>
        <SimilarMoviesTitle>Similar Movies</SimilarMoviesTitle>
        <SimilarMoviesCardWrapper>
          {data &&
            data.results
              .slice(0, similarMoviesFetchLimit)
              .map((movie) => (
                <MovieCard
                  movieId={movie.id}
                  posterUrl={POSTER_URL + movie.poster_path}
                  originalTitle={movie.title}
                />
              ))}
        </SimilarMoviesCardWrapper>
      </SimilarMoviesWrapper>
    );
  return null;
};

SimilarMoviesSection.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default SimilarMoviesSection;
