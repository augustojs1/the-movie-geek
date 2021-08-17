import styled from 'styled-components';

export const TrendingMovieWrapper = styled.section`
  max-width: 60rem;
  margin-bottom: 5rem;
  overflow: hidden;
  position: relative;
  color: #fff;
`;

export const ButtonDetails = styled.button`
  position: relative;
  font-size: 1.2rem;
  z-index: 2;
  cursor: pointer;
  border: 2px solid #e43f5a;
  font-weight: bold;
  color: #fff;
  margin-top: 0.8rem;
  border-radius: 3px;
  padding: 0.8rem 1.5rem;
  background-color: #e43f5a;
  &:hover {
    background-color: white;
    color: #e43f5a;
  }
`;

export const TrendingMovieTitle = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

export const TrendingMovieOverview = styled.p`
  position: relative;
  font-size: 1.2rem;
  z-index: 2;
  margin-top: 0.8rem;
`;
