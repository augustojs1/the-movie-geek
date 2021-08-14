import React from 'react';
import PropTypes from 'prop-types';
import YoutubeEmbedWrapper from './styles';

const YoutubeEmbed = ({ embedId }) => (
  <YoutubeEmbedWrapper>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </YoutubeEmbedWrapper>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
