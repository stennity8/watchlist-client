import { combineReducers } from 'redux';
import users from './userReducer'
import currentUser from './currentUserReducer'
import loginForm from './loginFormReducer'

export default combineReducers({
  users,
  currentUser,
  loginForm
})