import axios from 'axios';
import { SubmissionError } from 'redux-form';


export const GET_USER = 'GET_USER';
export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';


export const getUser = () => {
  return async dispatch => {
    const res = await axios.get('/user')
    dispatch({type: GET_USER, payload: res.data})
  }
}



export const register = async (data) => {
  try {
    const res = await axios.post('/register', data);
    if(res.data === true) {
      let {email, password} = data;
      login({email, password});
    }
  } catch(error) {
    throw new SubmissionError({ _error: error.response.data.message })
  }
}



export const login = async (data) => {
  try {
    const res = await axios.post('/login', data);
    if(res.data === true) {
      window.location.href = '/';
    }
  } catch (error) {
    throw new SubmissionError({ _error: "Invalid email or password." })
  }
}



export const logout = async () => {
  try {
    const res = await axios.get('/logout');
    if(res.data === true) {
      window.location.href = '/login';
    }
  } catch(error) {
    console.log(error.response)
  }
}




export const getTodos = () => {
  return async dispatch => {
    const res = await axios.get('/api/todos');
    dispatch({type: GET_TODOS, payload: res.data})
  }
}



export const addTodo = (value) => {
  return async dispatch => {
    const res = await axios.post('/api/todos', value);
    dispatch({type: ADD_TODO, payload: res.data})
  }
}



export const removeTodo = (id) => {
  return async dispatch => {
    const res = await axios.delete('/api/todos/' + id);
    dispatch({type: REMOVE_TODO, payload: id})
  }
}



export const updateTodo = (value, id) => {
  return async dispatch => {
    const res = await axios.put('/api/todos/' + id, value);
    dispatch({type: UPDATE_TODO, payload: res.data})
  }
}



export const toggleCompleted = (value) => {
  return {type: SHOW_COMPLETED, payload: value}
}