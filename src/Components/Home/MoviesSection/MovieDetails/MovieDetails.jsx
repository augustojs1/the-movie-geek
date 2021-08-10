import React from 'react';
import { useParams } from 'react-router-dom';
import {
  GET_MOVIE,
  POSTER_URL,
  BACKGROUND_URL,
} from '../../../../Services/api';
import useAxios from '../../../../Hooks/useAxios';
import {
  MovieDetailsWrapper,
  MovieTitle,
  Details,
  DetailsWrapper,
} from './styles';
import MoviePoster from './MoviePoster/MoviePoster';

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
      <MovieDetailsWrapper posterUrl={BACKGROUND_URL + data.backdrop_path}>
        <MoviePoster
          posterUrl={POSTER_URL + data.poster_path}
          posterAlt={data && data.original_title}
        />
        <DetailsWrapper>
          <MovieTitle>{data && data.original_title}</MovieTitle>
          <Details>{data && data.overview}</Details>
        </DetailsWrapper>
      </MovieDetailsWrapper>
    );
  return null;
};

export default MovieDetails;
