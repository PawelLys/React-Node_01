import { leftBurgerBtn, topSettingsBtn, topAccountBtn } from '../actions/types';

const INIT_STATE = {
  burgerBtn: false,
  settingsBtn: false,
  accountBtn: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case leftBurgerBtn:
      return { ...state, burgerBtn: action.payload, settingsBtn: false, accountBtn: false };
    case topSettingsBtn:
      return { ...state, settingsBtn: action.payload, burgerBtn: false, accountBtn: false };
    case topAccountBtn:
      return { ...state, accountBtn: action.payload, settingsBtn: false, burgerBtn: false };
    default:
      return state;
  }
};
