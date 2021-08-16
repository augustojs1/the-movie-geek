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
import Loading from '../../../Helper/Loading/Loading';
import Error from '../../../Helper/Error/Error';
import MovieCastSection from './MovieCastSection/MovieCastSection';

const MovieDetails = () => {
  const paramsMovieId = useParams();
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getMovieById() {
      const url = GET_MOVIE(paramsMovieId.id);
      await request(url);
    }

    getMovieById();
  }, [request]);

  if (error) return <Error errorLog={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <MovieDetailsMain posterUrl={BACKGROUND_URL + data.backdrop_path}>
          <MovieDetailsWrapper>
            <MoviePoster
              posterUrl={POSTER_URL + data.poster_path}
              posterAlt={data.original_title}
            />
            <MovieInformation
              movieId={data.id}
              title={data.title}
              overview={data.overview}
              releaseDate={data.release_date}
              rating={data.vote_average}
              runtime={data.runtime}
            />
          </MovieDetailsWrapper>
        </MovieDetailsMain>
        <MovieCastSection movieId={data.id} />
      </>
    );
  return null;
};

export default MovieDetails;
