import styled from 'styled-components';

const MoviePoster = styled.img`
  max-width: 30rem;
  max-height: 20rem;
  margin: 0.5rem;
  border-radius: 3px;
  &:hover {
    box-shadow: 1px 1px #e43f5a, 2px 2px #e43f5a, 3px 3px #e43f5a;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
  }
  @media (max-width: 40rem) {
    max-width: 25rem;
    max-height: 15rem;
  }
`;

export default MoviePoster;
