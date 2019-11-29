import { SET_CURRENT_USER } from "../actions/types"

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user
    default:
      return state
  }
}

export default userReducer