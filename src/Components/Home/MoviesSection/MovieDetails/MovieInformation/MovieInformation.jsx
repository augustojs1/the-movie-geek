import React from 'react';
import { MovieInformationWrapper, MovieTitle, Paragraph } from './styles';

const MovieInformation = () => (
  <MovieInformationWrapper>
    <MovieTitle>Movie Title Here (2020)</MovieTitle>
    <Paragraph>
      {' '}
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, soluta,
      facere, qui sapiente voluptatem aperiam non earum a quibusdam nesciunt
      quod animi nemo architecto? Voluptatem cupiditate amet laudantium
      perferendis. Nemo?{' '}
    </Paragraph>
  </MovieInformationWrapper>
);

export default MovieInformation;
