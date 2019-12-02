import { ADD_TVSHOW_TO_WATCHLIST, LOAD_WATCHLIST } from "../actions/types"

const watchlistTvShowReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_WATCHLIST:
      return action.payload
    case ADD_TVSHOW_TO_WATCHLIST:
      return [...state, action.payload]
    default:
      return state
  }
}

export default watchlistTvShowReducer