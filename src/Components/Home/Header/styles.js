import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-image: url(${(props) => props.backgroundUrl});
  background-image: no-repeat cover;
  max-width: 60rem;
  margin: 0 auto;
`;

export const HeaderNav = styled.header`
  color: red;
`;
