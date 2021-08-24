import styled from 'styled-components';

export const ResultWrapper = styled.ul`
  position: absolute;
  box-shadow: #1f4068 2px 2px 2.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  max-width: 30rem;
  background-color: #1b1b2f;
  border-radius: 3px;
`;

export const ResultItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export const ResultItemTitle = styled.p`
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
`;

export const ResultItemPoster = styled.img`
  width: 6rem;
  height: 5rem;
`;
