import { combineReducers } from 'redux';
import users from './userReducer'
import currentUser from './currentUserReducer'

export default combineReducers({
  users,
  currentUser
})