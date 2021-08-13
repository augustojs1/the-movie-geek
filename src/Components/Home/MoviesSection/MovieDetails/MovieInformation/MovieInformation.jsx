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

const MovieInformation = ({
  title,
  overview,
  releaseDate,
  rating,
  runtime,
}) => {
  function getReleaseYear(movieReleaseDate) {
    return movieReleaseDate.slice(0, 4);
  }

  const releaseYear = getReleaseYear(releaseDate);

  function getRuntimeInHours(runtimeInMinutes) {
    const hours = Math.floor(runtimeInMinutes / 60);
    const minutes = runtimeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  const runtimeInHour = getRuntimeInHours(runtime);

  return (
    <MovieInformationWrapper>
      <MovieTitle>{`${title && title} (${releaseYear})`}</MovieTitle>
      <Paragraph>{overview && overview}</Paragraph>
      <Wrapper>
        <RatingWrapper>
          <TitleText>IMDB Rating</TitleText> <MovieRating rating={rating} />
        </RatingWrapper>
        <RuntimeWrapper>
          <TitleText>Runtime</TitleText> {runtimeInHour}
        </RuntimeWrapper>
      </Wrapper>
    </MovieInformationWrapper>
  );
};

MovieInformation.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default MovieInformation;
