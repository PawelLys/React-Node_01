import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  left: -140px;
  top: 50%;
  transform: translateY(-50%);
  width: 140px;
  height: 109‬px;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);

  ${({ smallerHeight }) =>
    smallerHeight &&
    css`
      height: 36px;
    `}
`;

export const MenuWrapper = styled.ul`
  list-style: none;
  font-weight: 400;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  height: 36px;
  padding: 0 8px;
  cursor: pointer;

  :hover {
    background-color: rgb(244, 244, 244);
    color: rgb(21, 21, 21);
  }

  :active {
    background-color: rgb(234, 234, 234);
  }
`;

export const ItemDivider = styled.li`
  height: 1px;
  background-color: rgb(234, 234, 234);
`;
