import styled from 'styled-components';

const Button = styled.a`
  display: block;
  font-size: 1.2rem;
  cursor: pointer;
  border: 2px solid #ec407a;
  font-weight: bold;
  color: #fff;
  margin-top: 0.8rem;
  border-radius: 3px;
  padding: 0.8rem 1.5rem;
  background-color: #ec407a;
  &:hover {
    background-color: white;
    color: #ec407a;
  }
`;

export default Button;
