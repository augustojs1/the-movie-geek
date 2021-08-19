import styled from 'styled-components';

export const FooterArea = styled.footer`
  background-color: #1b1b2f;
  box-shadow: #1f4068 2px 2px 2.5px;
  padding: 4rem 0;
  @media (max-width: 40rem) {
    padding: 1.5rem;
  }
`;

export const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkIcon = styled.a`
  margin-top: 1.5rem;
  margin-left: 0.5rem;
  display: inline-block;
`;
