import { SET_CURRENT_USER, GET_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/types"

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload
    case GET_CURRENT_USER:
      return action.payload
    case LOGOUT_CURRENT_USER:
      return null
    default:
      return state
  }
}

export default currentUserReducer