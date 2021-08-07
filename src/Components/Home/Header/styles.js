import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: url(${(props) => props.backgroundUrl}) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  opacity: 0.4;
  max-width: 60rem;
  margin: 0 auto;
  min-height: 30rem;
  /* border: 1px solid red; */
`;

export const HeaderNav = styled.header`
  color: red;
`;
