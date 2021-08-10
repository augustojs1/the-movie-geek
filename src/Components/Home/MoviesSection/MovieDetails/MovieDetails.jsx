import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const params = useParams();

  return <h1>Movie ID: {params.id} </h1>;
};

export default MovieDetails;
