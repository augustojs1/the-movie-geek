import styled from 'styled-components';

export const CastCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem;
  width: 10rem;
  @media (max-width: 40rem) {
    width: 8rem;
  }
`;

export const ActorPhoto = styled.img`
  max-width: 6rem;
  max-height: 6rem;
  clip-path: circle(50%);
  object-fit: cover;
  @media (max-width: 40rem) {
    max-width: 4rem;
    max-height: 4rem;
  }
`;

export const ActorName = styled.p`
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
`;

export const Character = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;
