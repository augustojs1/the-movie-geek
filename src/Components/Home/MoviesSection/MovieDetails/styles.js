import styled from 'styled-components';

export const MovieDetailsMain = styled.main`
  padding: 4rem;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  min-height: 50vh;
  margin: 0 auto;
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

export const MovieDetailsWrapper = styled.section`
  display: flex;
  max-width: 60rem;
  margin: 0 auto;
`;
