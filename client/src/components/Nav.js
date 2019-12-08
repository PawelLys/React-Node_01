import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { fetchUser } from './actions';
import history from '../history';
import { GlobalStyle, ComponentsWrapper, PageContent } from './styledNav';
import { darkTheme, lightTheme } from './themes';
import HeaderTop from './content/header/HeaderTop';
import HeaderLeft from './content/header/HeaderLeft';
import elements from './content/header/elements';
import LoginPage from './content/authentication/LoginPage';
import Register from './content/authentication/Register';
import PageErrCatch from './content/PageErrCatch';
import UserContent from './content/mainPage';

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

const Nav = ({ themeType, userInfo, fetchUser }) => {
  useEffect(() => {
    fetchUser();
    // zczytanie themeType z localStorage
  }, []);

  function theme() {
    switch (themeType) {
      case 'dark':
        return darkTheme;
      case 'light':
        return lightTheme;
      default:
        return lightTheme;
    }
  }
  console.log(userInfo);

  const userLoggedIn = () => {
    return (
      <ThemeProvider theme={theme()}>
        <ComponentsWrapper>
          <HeaderTop />
          <PageContent>
            <HeaderLeft elements={elements} />
            <Switch>
              <Route exact path="/" component={UserContent} />
              <Route component={PageErrCatch} />
            </Switch>
          </PageContent>
        </ComponentsWrapper>
      </ThemeProvider>
    );
  };

  return (
    <Router history={history}>
      <GlobalStyle />
      {userInfo === 'wait' || userInfo !== 'error' ? ( // || !userInfo || !userInfo.registered
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={Register} />
          <Route component={PageErrCatch} />
        </Switch>
      ) : (
        userLoggedIn()
      )}
    </Router>
  );
};

const mapStateToProps = ({ themeType, userInfo }) => {
  return { themeType, userInfo };
};

export default connect(mapStateToProps, { fetchUser })(Nav);
