import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';

import authReducer from './authReducer';
import todoReducer from './todoReducer';
import showCompletedReducer from './showCompletedReducer';


export default combineReducers({
  form: reduxForm,
  user: authReducer,
  todos: todoReducer,
  showCompleted: showCompletedReducer
});