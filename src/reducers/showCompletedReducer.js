import {SHOW_COMPLETED} from '../actions';


export default (state = false, action) => {
  switch(action.type) {
    case SHOW_COMPLETED:
      return !state;

    default:
      return state;
  }
}