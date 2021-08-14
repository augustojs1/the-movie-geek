import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  text-align: center;
  border: 1rem solid #f3f3f3;
  border-top: 1rem solid #ec407a;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: ${spin} 2s linear infinite;
`;

export const LoaderWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
`;
