import styled from 'styled-components';

export const TrendingMovieWrapper = styled.section`
  overflow: hidden;
  position: relative;
  margin-left: 1rem;
  max-width: 40rem;
  color: #fff;
`;

export const ButtonDetails = styled.button`
  position: relative;
  z-index: 2;
  cursor: pointer;
  border: 1px solid #ec407a;
  font-weight: bold;
  color: #fff;
  margin-top: 0.8rem;
  border-radius: 3px;
  padding: 0.8rem;
  background-color: #ec407a;
  &:hover {
    background-color: white;
    color: #ec407a;
  }
`;

export const TrendingMovieTitle = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

export const TrendingMovieOverview = styled.p`
  position: relative;
  z-index: 2;
  margin-top: 0.8rem;
`;
