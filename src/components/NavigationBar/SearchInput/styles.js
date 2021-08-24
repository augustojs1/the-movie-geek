import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  width: 15rem;
  background-color: #fff;
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
  @media (max-width: 40rem) {
    width: 12rem;
    margin-top: 0.3rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ResultWrapper = styled.ul`
  position: absolute;
  box-shadow: #1f4068 2px 2px 2.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  max-width: 30rem;
  background-color: #1b1b2f;
  border-radius: 3px;
`;
