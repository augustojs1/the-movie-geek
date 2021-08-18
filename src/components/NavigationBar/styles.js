import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  padding: 1.5rem 0;
  background-color: #1b1b2f;
  top: 0;
  position: fixed;
  opacity: initial;
  z-index: 9999;
  box-shadow: #1f4068 2px 2px 2.5px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 60rem;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  margin-left: 0.3rem;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  &::before {
    content: '';
    background: url('./../../assets/glasses.svg');
  }
`;
