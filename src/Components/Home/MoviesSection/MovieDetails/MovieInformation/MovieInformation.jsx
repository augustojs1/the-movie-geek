import React from 'react';
import PropTypes from 'prop-types';
import {
  MovieInformationWrapper,
  MovieTitle,
  Paragraph,
  Wrapper,
  RatingWrapper,
  RuntimeWrapper,
  TitleText,
} from './styles';
import MovieRating from './MovieRating/MovieRating';
import getReleaseYear from '../../../../../Services/getReleaseYear';
import getRuntimeInHours from '../../../../../Services/getRuntimeInHours';

const MovieInformation = ({
  movieId,
  title,
  overview,
  releaseDate,
  rating,
  runtime,
}) => {
  const releaseYear = getReleaseYear(releaseDate);

  const runtimeInHour = getRuntimeInHours(runtime);

  return (
    <MovieInformationWrapper>
      <MovieTitle>{`${title && title} (${releaseYear})`}</MovieTitle>
      <Paragraph>{overview && overview}</Paragraph>
      <Wrapper>
        <RatingWrapper>
          <TitleText>IMDB Rating</TitleText> <MovieRating rating={rating} />
        </RatingWrapper>
        <div>
          <TitleText>Director</TitleText>
          <p>Lorem Ipsum</p>
        </div>
        <RuntimeWrapper>
          <TitleText>Runtime</TitleText> {runtimeInHour}
        </RuntimeWrapper>
      </Wrapper>
    </MovieInformationWrapper>
  );
};

MovieInformation.propTypes = {
  title: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default MovieInformation;
