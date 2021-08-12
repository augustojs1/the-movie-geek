import styled from 'styled-components';

const RatingWrapper = styled.div`
  font-size: 1rem;
  padding: 1rem;
  font-weight: bold;
  max-width: 3rem;
  max-height: 3rem;
  display: inline-block;
  text-align: center;
  color: white;
  border-radius: 50%;
  background-color: ${(props) => props.ratingColor};
`;

export default RatingWrapper;
