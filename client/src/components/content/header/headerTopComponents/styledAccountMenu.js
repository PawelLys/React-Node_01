import styled, { css } from 'styled-components';
import { settingsMain } from './styledSettings';

import { Link } from 'react-router-dom';

export const AccountMain = styled(settingsMain)`
  height: 80px;
  width: 10rem;
  background-color: transparent;
  border-left: 1px solid transparent;
  transition: none;
`;

export const AccountSettings = styled.div`
  width: 100%;
  height: 40px;
  list-style: none;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.navBorderColor};
  background-color: ${({ theme }) => theme.leftNavBg};
  font-size: calc(${({ theme }) => theme.leftNavSize} + 2px);
  display: flex;
  align-items: center;
  padding-left: 10px;

  transform: translateY(-200%);
  opacity: 0;
  transition: all 0.2s ${({ delay }) => delay || 0}s;

  ${({ shouldDisplay }) =>
      shouldDisplay &&
      css`
        opacity: 1;
        transform: translateY(0);
      `}
    :hover {
    background-color: ${({ theme }) => theme.settingsExitBtnHover};
  }

  :active {
    background-color: ${({ theme }) => theme.settingsExitBtnActive};
  }
`;
