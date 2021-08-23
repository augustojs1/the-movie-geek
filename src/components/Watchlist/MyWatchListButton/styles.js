import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: 2px solid #e43f5a;
  font-weight: bold;
  color: #fff;
  border-radius: 3px;
  padding: 0.3rem 1.5rem;
  margin-left: 2rem;
  background-color: #e43f5a;
  &:hover {
    background-color: white;
    color: #e43f5a;
  }
  @media (max-width: 40rem) {
    margin-top: 0.8rem;
    padding: 0.3rem 1rem;
  }
`;

export default Button;
