import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import MoviePoster from './styles';

const MovieCard = ({ movieId, posterUrl, originalTitle }) => {
  const navigate = useNavigate();

  function handleClick() {
    React.useEffect(() => {
      navigate(`/movie-details/${movieId}`);
    }, [navigate]);
  }

  return (
    <>
      <Link to={`/movie-details/${movieId}`} onClick={handleClick}>
        <MoviePoster src={posterUrl} alt={originalTitle} />
      </Link>
    </>
  );
};

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
  posterUrl: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
};

export default MovieCard;
