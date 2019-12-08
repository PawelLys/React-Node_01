import { addItemsListInput } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case addItemsListInput:
      return action.payload;
    default:
      return state;
  }
};
