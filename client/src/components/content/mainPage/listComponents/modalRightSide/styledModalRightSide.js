import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 600px;
  background-color: #eee;
  height: 100vh;
  transform: translateX(100%);
  transition: transform 0.2s;

  ${({ shouldDisplay }) =>
    shouldDisplay &&
    css`
      transform: translateX(0%);
    `}

  ${({ addSpace }) =>
    addSpace &&
    css`
      width: calc(100% - 48px);
    `}
`;
