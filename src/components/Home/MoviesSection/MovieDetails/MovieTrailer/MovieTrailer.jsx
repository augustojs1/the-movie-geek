import React from 'react';
import PropTypes from 'prop-types';
import { MovieTrailerWrapper, MovieTrailerTitle } from './styles';
import useAxios from '../../../../../hooks/useAxios';
import { GET_TRAILER_BY_MOVIE_ID } from '../../../../../services/api';
import Loading from '../../../../Helper/Loading/Loading';
import Error from '../../../../Helper/Error/Error';
import YoutubeEmbed from './YoutubeEmbed/YoutubeEmbed';

const MovieTrailer = ({ movieId, title }) => {
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getMovieTrailerById() {
      const url = GET_TRAILER_BY_MOVIE_ID(movieId);
      await request(url);
    }

    getMovieTrailerById();
  }, [request]);

  if (error) return <Error errorLog={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <MovieTrailerWrapper>
        <MovieTrailerTitle>Trailer for {title}</MovieTrailerTitle>
        <YoutubeEmbed
          embedId={
            data ? data.results[data.results.length - 1].key : 'No trailer'
          }
        />
      </MovieTrailerWrapper>
    );
  return null;
};

MovieTrailer.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieTrailer;
