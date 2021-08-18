import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  max-width: 100%;
  min-height: 40rem;
  border-bottom: 1px solid #e43f5a;
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
    opacity: 0.2;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default HeaderWrapper;
