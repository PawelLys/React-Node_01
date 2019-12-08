import { fetch_user, fetching_data, fetch_err } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case fetching_data: 
      return 'wait';
    case fetch_user:
      return action.payload || '';
    case fetch_err:
      return 'error';
    default:
      return state;
  }
}
