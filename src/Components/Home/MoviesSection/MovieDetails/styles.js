import styled from 'styled-components';

export const MovieDetailsWrapper = styled.section`
  padding-top: 4rem;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  &:before {
    content: '';
    background: url(${(props) => props.posterUrl});
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.1;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 1rem;
`;

export const Details = styled.p`
  line-height: 1rem;
  font-size: 1.1rem;
  color: white;
`;

export const DetailsWrapper = styled.div``;
