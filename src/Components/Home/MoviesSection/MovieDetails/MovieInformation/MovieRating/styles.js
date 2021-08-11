import styled from 'styled-components';

const RatingWrapper = styled.div`
  font-size: 2rem;
  padding: 1rem;
  font-weight: bold;
  max-width: 6rem;
  max-height: 6rem;
  display: inline-block;
  text-align: center;
  color: white;
  border-radius: 50%;
  background-color: ${(props) => props.ratingColor};
`;

export default RatingWrapper;
