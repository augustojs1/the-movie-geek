import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  font-size: 1.2rem;
  z-index: 2;
  cursor: pointer;
  border: 2px solid #e43f5a;
  font-weight: bold;
  color: #fff;
  margin-top: 0.8rem;
  border-radius: 3px;
  padding: 0.8rem 1.5rem;
  background-color: #e43f5a;
  &:hover {
    background-color: white;
    color: #e43f5a;
  }
  @media (max-width: 40rem) {
    padding: 0.4rem 1rem;
  }
`;

export default Button;
