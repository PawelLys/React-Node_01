import { setResize } from '../actions/types';

export default (state = window.innerWidth < 684, action) => {
  switch (action.type) {
    case setResize:
      return action.payload;
    default:
      return state;
  }
};
