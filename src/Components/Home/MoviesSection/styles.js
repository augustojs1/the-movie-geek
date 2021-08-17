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
    }
  }
`;

export const MovieSectionNav = styled.nav`
  display: flex;
  margin: 2rem 0;
  font-weight: bold;
`;

export const MovieCardsWrapper = styled.div`
  display: flex;
`;
