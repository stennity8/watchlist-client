import {
  ADD_TVSHOW_TO_WATCHLIST,
  LOAD_WATCHLIST,
  CLEAR_WATCHLIST,
  UPDATE_TVSHOW_TO_WATCHED,
  REMOVE_TVSHOW_FROM_WATCHLIST
} from "../actions/types"

const watchlistTvShowReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_WATCHLIST:
      return action.payload
    case ADD_TVSHOW_TO_WATCHLIST:
      return [...state, action.payload]
    case CLEAR_WATCHLIST:
      return []
    case UPDATE_TVSHOW_TO_WATCHED:
      return state.filter(show => show.id !== action.payload.tv_show_id)
    case REMOVE_TVSHOW_FROM_WATCHLIST:
      return state.filter(show => show.id !== action.payload.tv_show_id)
    default:
      return state
  }
}

export default watchlistTvShowReducer