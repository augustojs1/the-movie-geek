import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: 2px solid #e43f5a;
  font-weight: bold;
  color: #fff;
  border-radius: 3px;
  padding: 0.3rem 1.5rem;
  margin-left: 2rem;
  background-color: #e43f5a;

  &:focus + ul {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0px);
  }

  &:hover {
    background-color: white;
    color: #e43f5a;
  }

  @media (max-width: 40rem) {
    margin-top: 0.8rem;
    padding: 0.3rem 1rem;
  }
`;

export const WatchListDropwdownMenu = styled.ul`
  margin-top: 0.5rem;
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  right: 0;
  background-color: #162447;
  border-radius: 3px;
  box-shadow: #1f4068 3px 3px 3.5px;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: all 0.4s ease;
`;

export const WatchListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    background-color: #162447;
  }
`;
