import styled from 'styled-components';

const MoviePosterDetail = styled.img`
  max-width: 35rem;
  max-height: 25rem;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media (max-width: 60rem) {
    max-width: 15rem;
    max-height: 15rem;
    margin-bottom: 1rem;
  }
`;

export default MoviePosterDetail;
