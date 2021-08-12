import styled from 'styled-components';

const RatingWrapper = styled.div`
  vertical-align: middle;
  display: table-cell;
  line-height: 3rem;
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  display: inline-block;
  text-align: center;
  color: white;
  border-radius: 50%;
  background: ${(props) => props.ratingColor};
`;

export default RatingWrapper;
