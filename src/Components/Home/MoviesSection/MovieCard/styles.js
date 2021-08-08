import styled from 'styled-components';

const MoviePoster = styled.img`
  max-width: 30rem;
  max-height: 20rem;
  margin: 0.5rem;
  border-radius: 3px;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default MoviePoster;
