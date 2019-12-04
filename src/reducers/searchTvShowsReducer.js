import { SET_SEARCH_TVSHOWS, CLEAR_SEARCH_TVSHOWS } from "../actions/types"

const searchTvShowsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SEARCH_TVSHOWS:
      if (action.payload.length === 0) {
        return 'No results found'
      } else {
        return action.payload
      }
    case CLEAR_SEARCH_TVSHOWS:
      return []
    default:
      return state
  }
}

export default searchTvShowsReducer