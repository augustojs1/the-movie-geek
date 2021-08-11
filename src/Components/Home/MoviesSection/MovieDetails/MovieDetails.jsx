import React from 'react';
import { useParams } from 'react-router-dom';
import {
  GET_MOVIE,
  POSTER_URL,
  BACKGROUND_URL,
} from '../../../../Services/api';
import useAxios from '../../../../Hooks/useAxios';
import { MovieDetailsMain, MovieDetailsWrapper } from './styles';
import MoviePoster from './MoviePoster/MoviePoster';
import MovieInformation from './MovieInformation/MovieInformation';

const MovieDetails = () => {
  const params = useParams();
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getMovieById() {
      const url = GET_MOVIE(params.id);
      await request(url);
    }

    getMovieById();
  }, []);

  if (error) return 'Error';
  if (loading) return 'Loading';
  if (data)
    return (
      <MovieDetailsMain posterUrl={BACKGROUND_URL + data.backdrop_path}>
        <MovieDetailsWrapper>
          <MoviePoster />
          <MovieInformation />
        </MovieDetailsWrapper>
      </MovieDetailsMain>
    );
  return null;
};

export default MovieDetails;
