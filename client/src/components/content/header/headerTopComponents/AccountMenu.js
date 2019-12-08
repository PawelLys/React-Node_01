import React from 'react';

import history from '../../../../history';
import * as s from './styledAccountMenu';

export default ({ display, userLogOut, accountBtnActive }) => {
  const onAccountSettingsClick = () => {
    accountBtnActive(false);
    history.push('/account_details');
  };

  const onLogOutBtnClick = () => {
    accountBtnActive(false);
    userLogOut();
  };

  return (
    <s.AccountMain shouldDisplay={display}>
      <s.AccountSettings shouldDisplay={display} onClick={onAccountSettingsClick}>
        Account Settings
      </s.AccountSettings>
      <s.AccountSettings shouldDisplay={display} delay={0.1} onClick={onLogOutBtnClick}>
        Log out
      </s.AccountSettings>
    </s.AccountMain>
  );
};
