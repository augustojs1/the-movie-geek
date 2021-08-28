import styled from 'styled-components';

const Button = styled.button`
  display: block;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  border: 2px solid #e43f5a;
  font-weight: bold;
  color: #fff;
  margin-top: 0.8rem;
  margin-right: 1rem;
  border-radius: 3px;
  padding: 0.8rem 1.5rem;
  background-color: #e43f5a;
  &:hover {
    background-color: white;
    color: #e43f5a;
  }
  @media (max-width: 40rem) {
    padding: 0.5rem 1.2rem;
    font-size: 0.8rem;
  }
`;

export default Button;
