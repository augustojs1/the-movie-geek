import React from 'react';
import PropTypes from 'prop-types';
import { CastWrapper, CastTitle } from './styles';
import { GET_CAST, POSTER_URL } from '../../../../../Services/api';
import useAxios from '../../../../../Hooks/useAxios';
import Loading from '../../../../Helper/Loading/Loading';
import Error from '../../../../Helper/Error/Error';
import MovieCastCard from './MovieCastCard/MovieCastCard';

const MovieCast = ({ movieId }) => {
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getCastByMovieId(id) {
      const url = GET_CAST(id);
      await request(url);
    }

    getCastByMovieId(movieId);
  }, []);

  if (error) return <Error errorLog={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <CastWrapper>
        <CastTitle>Cast</CastTitle>
        {data &&
          data.cast.map((actor) => (
            <MovieCastCard
              key={actor.id}
              name={actor.name}
              photoUrl={POSTER_URL + actor.profile_path}
              character={actor.character}
            />
          ))}
      </CastWrapper>
    );
  return null;
};

MovieCast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCast;
