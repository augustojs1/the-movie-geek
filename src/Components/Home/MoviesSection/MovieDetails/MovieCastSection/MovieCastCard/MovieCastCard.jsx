import React from 'react';
import PropTypes from 'prop-types';
import { CastCardWrapper, ActorPhoto, ActorName, Character } from './styles';

const MovieCastCard = ({ name, photoUrl, character }) => (
  <CastCardWrapper>
    <ActorPhoto src={photoUrl} />
    <ActorName>{name}</ActorName>
    <Character>{character}</Character>
  </CastCardWrapper>
);

MovieCastCard.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default MovieCastCard;
