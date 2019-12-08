import React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

import * as s from './styledSettings';

export default ({ display, theme, changeTheme, setSettingsBtn }) => {
  const onThemeLight = () => changeTheme('light');

  const onThemeDark = () => changeTheme('dark');

  const onExitBtnClick = () => setSettingsBtn(false);

  return (
    <s.settingsMain shouldDisplay={display}>
      <s.MainHead>
        <s.MainTitle>Ustawienia</s.MainTitle>
        <s.ExitBtn onClick={onExitBtnClick}>
          <Icon iconName="Clear" />
        </s.ExitBtn>
      </s.MainHead>
      <s.ThemePicker>
        <s.PickerTitle>Change theme:</s.PickerTitle>
        <s.PickerContainer>
          <s.LightTheme
            title="Change to default theme"
            themeChoosen={theme === 'light'}
            onClick={onThemeLight}
          />
          <s.DarkTheme
            title="Change to contrast theme"
            themeChoosen={theme === 'dark'}
            onClick={onThemeDark}
          />
        </s.PickerContainer>
      </s.ThemePicker>
    </s.settingsMain>
  );
};
