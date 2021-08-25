import styled from 'styled-components';

export const MovieSectionWrapper = styled.section`
  max-width: 60rem;
  margin: 0 auto;
`;
export const NavigationLinks = styled.ul`
  display: flex;

  a {
    text-decoration: none;
    color: #eee;
  }

  li {
    margin-right: 1rem;
    padding: 0.5rem;
  }

  .current {
    li {
      color: #e43f5a;
      border-bottom: 2px solid #e43f5a;
      @media (max-width: 40rem) {
        border-bottom: 1px solid #e43f5a;
      }
    }
  }
`;

export const MovieSectionNav = styled.nav`
  display: flex;
  margin: 2rem 0;
  font-weight: bold;
  @media (max-width: 40rem) {
    font-size: 0.8rem;
    margin: 1rem 0;
  }
`;

export const MovieCardsWrapper = styled.div`
  display: flex;
`;

export const DropdownMenuContainer = styled.div`
  position: relative;
`;

export const MoviesGenreDropdownMenu = styled.ul`
  padding: 1rem;
  margin-top: 0.5rem;
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  background-color: #162447;
  border-radius: 3px;
  box-shadow: #1f4068 3px 3px 3.5px;
  left: 0px;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: all 0.4s ease;
  &:focus {
    color: #e43f5a;
    border-bottom: 2px solid #e43f5a;
    @media (max-width: 40rem) {
      border-bottom: 1px solid #e43f5a;
    }
  }
`;

export const DropdownMenuItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    &:focus {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0px);
    }

    &:hover {
      color: #e43f5a;
    }
  }
`;

export const DropdownButton = styled.button`
  cursor: pointer;
  border: none;
  text-decoration: none;
  color: #eee;
  padding: 0.5rem;
  background-color: transparent;
  font-weight: bold;
  @media (max-width: 40rem) {
    font-size: 0.8rem;
    margin: 1rem 0;
  }

  &:focus + ul {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0px);
  }
`;
