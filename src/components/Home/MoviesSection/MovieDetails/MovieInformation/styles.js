import styled from 'styled-components';

export const MovieInformationWrapper = styled.div`
  margin-left: 2rem;
`;

export const MovieTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  @media (max-width: 60rem) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
  margin-bottom: 2.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 30rem;
  justify-content: space-around;
`;

export const RatingWrapper = styled.section`
  text-align: center;
  max-width: 15rem;
`;

export const RuntimeWrapper = styled.section`
  max-width: 15rem;
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 3rem;
  @media (max-width: 60rem) {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 30rem;
  margin: 1rem;
  display: flex;
`;
