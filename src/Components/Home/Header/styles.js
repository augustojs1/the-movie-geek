import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  max-width: 60rem;
  margin: 0 auto;
  min-height: 30rem;
  &:before {
    content: '';
    background: url(${(props) => props.backgroundUrl});
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.3;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default HeaderWrapper;
