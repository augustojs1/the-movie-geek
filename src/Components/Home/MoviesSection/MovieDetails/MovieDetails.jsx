import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_MOVIE } from '../../../../Services/api';
import useAxios from '../../../../Hooks/useAxios';
import { MovieDetailsWrapper, MovieTitle } from './styles';

const MovieDetails = () => {
  const params = useParams();
  const { data, loading, error, request } = useAxios();

  React.useEffect(() => {
    async function getMovieById() {
      const url = GET_MOVIE(params.id);
      await request(url);
    }

    getMovieById();
    console.log(data);
  }, []);

  if (error) return 'Error';
  if (loading) return 'Loading';
  if (data)
    return (
      <MovieDetailsWrapper>Movie: {data && data.title} </MovieDetailsWrapper>
    );
  return null;
};

export default MovieDetails;
