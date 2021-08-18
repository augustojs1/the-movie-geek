import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  width: 15rem;
  background-color: #fff;
  background-position: left center;
  background-repeat: no-repeat;
  padding-left: 40px;
  color: black;
  padding: 0.4rem;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  border-bottom: 2px solid #e43f5a;
  transition: width 0.4s ease-in-out;
  &:hover {
    width: 20rem;
  }
`;

export default Input;
