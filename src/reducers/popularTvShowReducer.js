import { SET_POPULAR_TVSHOWS } from "../actions/types"

const popularTvShowReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POPULAR_TVSHOWS:
      return action.payload
    default:
      return state
  }
}

export default popularTvShowReducer