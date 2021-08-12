import styled from 'styled-components';

export const MovieInformationWrapper = styled.div`
  margin-left: 2rem;
`;

export const MovieTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
  margin-bottom: 3rem;
`;

export const MovieDuration = styled.p`
  font-weight: bold;
  font-size: 2rem;
  display: block;
  &:before {
    content: '';
    background: url('../../../../../Assets/duration-icon.svg');
    display: inline-block;
    width: 2rem;
    height: 2rem;
  }
`;
