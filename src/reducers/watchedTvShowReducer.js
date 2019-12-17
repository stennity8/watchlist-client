import {
  LOAD_WATCHED,
} from "../actions/types"

const watchedTvShowReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_WATCHED:
      return action.payload
    default:
      return state
  }
}

export default watchedTvShowReducer