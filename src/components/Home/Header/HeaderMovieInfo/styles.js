import styled from 'styled-components';

export const TrendingMovieWrapper = styled.section`
  max-width: 60rem;
  margin-bottom: 5rem;
  overflow: hidden;
  position: relative;
  color: #fff;
  @media (max-width: 40rem) {
    margin-left: 0.5rem;
  }
`;

export const TrendingMovieTitle = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  @media (max-width: 40rem) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }
`;

export const TrendingMovieOverview = styled.p`
  position: relative;
  font-size: 1.2rem;
  z-index: 2;
  margin-top: 0.8rem;
  @media (max-width: 40rem) {
    font-size: 0.9rem;
    margin-top: 0.4rem;
  }
`;
