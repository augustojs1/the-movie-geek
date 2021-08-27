import styled from 'styled-components';

export const PaginationWrapper = styled.nav`
  max-width: 100%;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const PaginationItemWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 2rem;
  justify-content: space-around;
  align-items: center;
`;

export const PaginationItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageLink = styled.a`
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e43f5a;
  background-color: #e43f5a;
  border-radius: 3px;

  &:hover {
    color: #e43f5a;
    background-color: #fff;
  }

  &:active {
    color: #e43f5a;
    background-color: #fff;
  }
`;
