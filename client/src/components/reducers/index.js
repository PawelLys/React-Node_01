import { combineReducers } from 'redux';
import headerBtnActive from './headerBtnActive';
import themeType from './themeType';
import windowWidth from './windowWidth';
import authReducer from './authReducer';
import youSpinMe from './youSpinMe';
import inputActive from './inputActive';

export default combineReducers({
  headerBtnActive,
  themeType,
  userInfo: authReducer,
  youSpinMe,
  windowWidth,
  inputActive
});
