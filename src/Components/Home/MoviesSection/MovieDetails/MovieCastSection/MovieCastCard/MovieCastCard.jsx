import React from 'react';
import PropTypes from 'prop-types';
import { CastWrapper, ActorPhoto, ActorName, Character } from './styles';

const MovieCastCard = ({ name, photoUrl, character }) => (
  <CastWrapper>
    <ActorPhoto src={photoUrl} />
    <ActorName>{name}</ActorName>
    <Character>{character}</Character>
  </CastWrapper>
);

MovieCastCard.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default MovieCastCard;
