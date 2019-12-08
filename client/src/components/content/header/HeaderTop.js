import React from 'react';
import { connect } from 'react-redux';

import history from '../../../history';
import { userLogOut, setSettingsBtnActive, setAccountBtnActive, changeTheme } from '../../actions';
import * as s from './styledHeaderTop';
import Logo from '../../../assets/logo.png';
import LoggedIn from '../../../assets/userPlaceholder.svg';
import Settings from './headerTopComponents/Settings';
import AccountMenu from './headerTopComponents/AccountMenu';

const HeaderTop = ({
  userLogOut,
  settingsBtn,
  accountBtn,
  setSettingsBtnActive,
  setAccountBtnActive,
  themeType,
  changeTheme
}) => {
  const onClickLogo = () => history.push('/');

  const onSettingsBtnClick = () => setSettingsBtnActive(!settingsBtn);

  const onAccountBtnClick = () => setAccountBtnActive(!accountBtn);

  return (
    <s.HeaderTop>
      <s.HeaderWrapper>
        <s.WrapperPresent onClick={onClickLogo}>
          <img alt="logo" src={Logo} />
          <s.PresentTitle>TODO</s.PresentTitle>
        </s.WrapperPresent>
        <s.WrapperNav>
          <s.NavHelpers>
            <s.IconContainer title="Wallet">
              <s.Icons iconName="Money" />
            </s.IconContainer>
            <s.IconContainer title="Settings" onClick={onSettingsBtnClick} activeBg={settingsBtn}>
              <s.Icons iconName="Settings" />
            </s.IconContainer>
            <s.IconContainer title="Account" onClick={onAccountBtnClick} activeBg={accountBtn}>
              {themeType === 'light' ? (
                <s.AccountImg alt="account" src={LoggedIn} />
              ) : (
                <s.LightenAccountImg>
                  <s.AccountImg alt="account" src={LoggedIn} lighten={true} />
                </s.LightenAccountImg>
              )}
            </s.IconContainer>
          </s.NavHelpers>
        </s.WrapperNav>
      </s.HeaderWrapper>

      <Settings
        display={settingsBtn}
        theme={themeType}
        changeTheme={changeTheme}
        setSettingsBtn={setSettingsBtnActive}
      />
      <AccountMenu display={accountBtn} userLogOut={userLogOut} accountBtnActive={setAccountBtnActive} />
    </s.HeaderTop>
  );
};

const mapStateToProps = ({ headerBtnActive, themeType }) => {
  return {
    settingsBtn: headerBtnActive.settingsBtn,
    accountBtn: headerBtnActive.accountBtn,
    themeType
  };
};

export default connect(mapStateToProps, {
  userLogOut,
  setSettingsBtnActive,
  setAccountBtnActive,
  changeTheme
})(HeaderTop);
