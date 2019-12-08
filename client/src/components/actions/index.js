import axios from 'axios';
import history from '../../history';
import {
  leftBurgerBtn,
  topSettingsBtn,
  topAccountBtn,
  setResize,
  addItemsListInput,
  setTheme,
  fetch_user,
  fetching_data,
  fetch_err,
  onLoginBtnClick
} from './types';

export const setBurgerBtnActive = bool => {
  return {
    type: leftBurgerBtn,
    payload: bool
  };
};

export const setSettingsBtnActive = bool => {
  return {
    type: topSettingsBtn,
    payload: bool
  };
};

export const setAccountBtnActive = bool => {
  return {
    type: topAccountBtn,
    payload: bool
  };
};

export const setWindowResize = bool => {
  return {
    type: setResize,
    payload: bool
  };
};

export const setInputActive = newArr => {
  return {
    type: addItemsListInput,
    payload: newArr
  };
};

export const changeTheme = themeType => {
  //save theme to localStorage
  return {
    type: setTheme,
    payload: themeType
  };
};

export const fetchUser = () => async dispatch => {
  dispatch({ type: fetching_data });
  try {
    const { data } = await axios.get('/api/current_user');

    dispatch({ type: fetch_user, payload: data });

    data && !data.registered ? history.push('/register') : history.push('/');
  } catch (e) {
    console.log(e);
    dispatch({ type: fetch_err });
  }
};

export const userLogOut = () => async dispatch => {
  await axios.get('/api/logout');

  dispatch({ type: fetch_user });
};

export const userOnLoginBtnClick = (login, password) => async dispatch => {
  dispatch({ type: onLoginBtnClick, payload: true });
  try {
    const { data } = await axios.post('/local/login', { login, password });

    if (data) dispatch({ type: fetch_user, payload: data });
    dispatch({ type: onLoginBtnClick, payload: false });
  } catch (e) {
    dispatch({ type: onLoginBtnClick, payload: false });
    return 'Incorrect login or password.';
  }
};

export const userOnSkipBtnClick = () => async dispatch => {
  try {
    const { data } = await axios.get('/local/skip');
    dispatch({ type: fetch_user, payload: data });
    history.push('/');
  } catch (e) {
    console.log(e);
  }
};

export const userAccountSettings = (login, password, fullName, adress) => async dispatch => {
  const { data } = await axios.post('/local/register', {
    login,
    password,
    fullName,
    adress
  });

  if (data.success) {
    data.user && dispatch({ type: fetch_user, payload: data.user });
    history.push('/');
  } else {
    if (data.hasOwnProperty('userExist')) {
      return { failure: true, errMessage: 'Login is already taken.' };
    }
  }
};

export const createNewOrder = () => async () => {
  await axios.post('/api/orders', {
    title: 'Test title',
    body: 'Body title',
    typeOfTruck: 1,
    adress: 'Domek'
  });
};

export const usersOrders = () => async () => {
  console.log(await axios.get('/api/users_orders'));
};
