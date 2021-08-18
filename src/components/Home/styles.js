import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  border: 1px solid red;
`;

export const Title = styled.h1`
  font-size: 2rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ titleColor }) => titleColor};
  padding: 2rem;
`;

export const Text = styled.p`
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  background-color: ${({ active }) => (active ? 'green' : 'red')};
`;
