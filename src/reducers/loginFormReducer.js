import { UPDATE_LOGIN_FORM } from '../actions/types'

const initialState = {
  username: "",
  password: ""
}

const loginFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_FORM:
      const { username, password } = action.payload
      return {
        ...state, username, password
      }
    default:
      return state
  }
}

export default loginFormReducer