import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'

import reducers from './components/reducers';
import Nav from './components/Nav';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(reduxThunk))}>
    <Nav/>
  </Provider>,
  document.getElementById('root')
);