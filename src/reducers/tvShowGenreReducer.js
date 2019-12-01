import { SET_TVSHOW_GENRES } from "../actions/types"

const tvShowGenreReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TVSHOW_GENRES:
      return action.payload
    default:
      return state
  }
}

export default tvShowGenreReducer