import styled from 'styled-components';

const Button = styled.a`
  display: block;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  margin-top: 0.8rem;
  margin-right: 1rem;
  border-radius: 3px;
  padding: 0.8rem 1.2rem;
  background-color: #162447;
  border: 2px solid #1f4068;

  &:hover {
    background-color: white;
    color: #162447;
    border: 2px solid #1f4068;
  }
  @media (max-width: 40rem) {
    padding: 0.5rem 1.2rem;
    font-size: 0.8rem;
  }
`;

export default Button;
