import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';
import useAxios from '../../../../../../Hooks/useAxios';
import { GET_TRAILER_BY_MOVIE_ID } from '../../../../../../Services/api';
import Error from '../../../../../Helper/Error/Error';

const PlayTrailerButton = ({ movieId }) => {
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getMovieTrailerById() {
      const url = GET_TRAILER_BY_MOVIE_ID(movieId);
      await request(url);
    }

    getMovieTrailerById();
  }, [request]);

  if (error) return <Error errorLog={error} />;
  if (loading) return 'Loading...';
  if (data)
    return (
      <Button
        onClick={() =>
          window.open(
            `https://www.youtube.com/embed/${
              data.results[data.results.length - 1].key
            }`,
            '_blank',
          )
        }
      >
        Play Trailer
      </Button>
    );
  return null;
};

PlayTrailerButton.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default PlayTrailerButton;
