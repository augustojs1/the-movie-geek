import styled from 'styled-components';

export const ResultItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    border-bottom: 1px solid #1f4068;
    background-color: #162447;
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: visible;

    &:focus {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0px);
    }
  }
`;

export const ResultItemTitle = styled.p`
  font-size: 1rem;
  margin-left: 0.8rem;
  color: #fff;
  font-weight: bold;
`;

export const ResultItemPoster = styled.img`
  max-width: 7rem;
  max-height: 6rem;
  border-radius: 3px;
  box-shadow: #e43f5a 2px 2px 2.5px;
`;
