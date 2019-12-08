import { onLoginBtnClick } from '../actions/types';

const INIT_STATE = {
    shouldLoginBtnSpin: false
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case onLoginBtnClick: 
      return {...state, shouldLoginBtnSpin: action.payload};
    default:
      return state;
  }
}
