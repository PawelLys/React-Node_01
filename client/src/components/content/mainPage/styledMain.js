import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 48px);
  flex: 1;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 98%;

  ${({ addLeftSpace }) =>
    addLeftSpace &&
    css`
      width: calc(98% - 48px);
      left: calc(48px + 1%);
    `}
`;
