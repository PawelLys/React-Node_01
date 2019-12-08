import { setTheme } from '../actions/types';

export default (state = 'light', action) => {
    switch(action.type) {
        case setTheme:
            return action.payload;
        default:
            return state;
    }
};