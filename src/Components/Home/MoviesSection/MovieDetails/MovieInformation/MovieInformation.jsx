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
import useAxios from '../../../../../Hooks/useAxios';
import { GET_CAST } from '../../../../../Services/api';

const MovieInformation = ({
  movieId,
  title,
  overview,
  releaseDate,
  rating,
  runtime,
}) => {
  const { data, request } = useAxios();

  React.useEffect(() => {
    async function getCastByMovieId(id) {
      const url = GET_CAST(id);
      await request(url);
    }

    getCastByMovieId(movieId);
  }, [request]);

  let directorName;

  if (data)
    data.crew.forEach((crewMember) => {
      if (crewMember.job === 'Director') {
        directorName = crewMember.name;
      }
    });

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
          <p>{directorName}</p>
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
  movieId: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
};

export default MovieInformation;
