import styled from 'styled-components';

export const MovieDetailsMain = styled.main`
  padding: 4rem;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid gray;
  &:before {
    content: '';
    background: url(${(props) => props.posterUrl});
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 1;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const MovieDetailsWrapper = styled.section`
  display: flex;
  background: #162447;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  max-width: 60rem;
  margin: 0 auto;
  border-radius: 5px;
  padding: 3rem;
  z-index: 1;
`;

export const MovieCastWrapper = styled.section`
  max-width: 60rem;
  display: flex;
  flex-direction: row;
`;
