import styled from 'styled-components';

const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: 2px solid #e43f5a;
  font-weight: bold;
  color: #fff;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  background-color: #e43f5a;
  &:hover {
    background-color: white;
    color: #e43f5a;
  }
`;

export default Button;
