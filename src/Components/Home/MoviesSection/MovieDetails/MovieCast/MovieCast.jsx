import React from 'react';
import PropTypes from 'prop-types';

const MovieCast = ({ movieId }) => {
  console.log(movieId);

  return (
    <div>
      <h1>Cast movie {movieId}</h1>
    </div>
  );
};

MovieCast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCast;
