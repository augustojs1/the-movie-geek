import React from 'react';
import PropTypes from 'prop-types';
import MovieTrailerWrapper from './styles';
import useAxios from '../../../../../Hooks/useAxios';
import { GET_TRAILER_BY_MOVIE_ID } from '../../../../../Services/api';
import Loading from '../../../../Helper/Loading/Loading';
import Error from '../../../../Helper/Error/Error';
import YoutubeEmbed from './YoutubeEmbed/YoutubeEmbed';

const MovieTrailer = ({ movieId }) => {
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getMovieTrailerById() {
      const url = GET_TRAILER_BY_MOVIE_ID(movieId);
      await request(url);
    }

    getMovieTrailerById();
  }, []);

  if (error) return <Error errorLog={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <MovieTrailerWrapper>
        <YoutubeEmbed embedId={data.results[data.results.length - 1].key} />
      </MovieTrailerWrapper>
    );
  return null;
};

MovieTrailer.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieTrailer;
