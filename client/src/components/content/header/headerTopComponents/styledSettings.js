import styled, { css } from 'styled-components';

export const settingsMain = styled.div`
  position: fixed;
  z-index: 2;
  right: 0;
  top: 48px;
  min-width: 265px;
  height: calc(100vh - 48px);
  background-color: ${({ theme }) => theme.leftNavBg};
  color: ${({ theme }) => theme.settingsColor};
  font-weight: 600;
  border-left: 1px solid ${({ theme }) => theme.navBorderColor};
  overflow: hidden;
  transform: translateX(100%);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ shouldDisplay }) =>
    shouldDisplay &&
    css`
      transform: translateX(0);
    `}
`;

export const MainHead = styled.div`
  display: flex;
  width: 100%;
`;

export const MainTitle = styled.div`
  flex: 1;
  font-size: calc(${({ theme }) => theme.leftNavSize} + 6px);
  padding: 20px 18px;
`;

export const ExitBtn = styled.div`
  justify-self: flex-end;
  align-self: flex-start;
  display: flex;
  align-items: center;
  font-size: calc(${({ theme }) => theme.leftNavSize} + 2px);
  padding: 9px 12px;
  margin: 10px 10px 0 0;
  color: #484644;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.settingsExitBtnHover};
  }

  :active {
    background-color: ${({ theme }) => theme.settingsExitBtnActive};
  }
`;

export const ThemePicker = styled.div`
  font-size: calc(${({ theme }) => theme.leftNavSize} + 2px);
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PickerTitle = styled.div`
  font-size: calc(${({ theme }) => theme.leftNavSize} + 2px);
  padding-bottom: 15px;
`;

export const PickerContainer = styled.div`
  display: flex;
`;

export const LightTheme = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border: 1.5px solid ${({ theme }) => theme.navBorderColor};
  cursor: pointer;
  background-color: #fff;
  transition: border 0.15s;
  ${({ themeChoosen }) =>
    themeChoosen
      ? css`
          border: 1.5px solid ${({ theme }) => theme.barChoosen};
        `
      : css`
          :hover {
            border: 1.5px solid ${({ theme }) => theme.topNavBgHover};
          }

          :active {
            border: 1.5px solid ${({ theme }) => theme.barChoosen};
          }
        `}
`;

export const DarkTheme = styled(LightTheme)`
  background-color: #0001ff;
`;
