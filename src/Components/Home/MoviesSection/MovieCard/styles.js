import styled from 'styled-components';

const MoviePoster = styled.img`
  max-width: 30rem;
  max-height: 20rem;
  margin: 0.5rem;
  border-radius: 3px;
  &:hover {
    box-shadow: 1px 1px #ec407a, 2px 2px #ec407a, 3px 3px #ec407a;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
`;

export default MoviePoster;
