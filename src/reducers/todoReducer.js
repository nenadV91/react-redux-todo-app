import {
  GET_TODOS, 
  ADD_TODO, 
  REMOVE_TODO,
  UPDATE_TODO,
  SHOW_COMPLETED
} from '../actions';


export default (state = [], action) => {
  switch(action.type) {
    case GET_TODOS:
      return action.payload.sort((a, b) => a.completed - b.completed);


    case ADD_TODO:
      return [action.payload, ...state];


    case REMOVE_TODO:
      return state.filter(e => e._id != action.payload);


    case UPDATE_TODO:
      let update = action.payload;
      return state
        .map(e => e._id == update._id ? update : e )
        .sort((a, b) => a.completed - b.completed);


    default:
      return state;
  }
}
