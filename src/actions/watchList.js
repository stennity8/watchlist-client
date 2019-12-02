import { ADD_TVSHOW_TO_WATCHLIST } from "./types"
import history from '../history'

export const addTvShow = show => {
  return {
    type: ADD_TVSHOW_TO_WATCHLIST,
    payload: show
  }
}

export const postTvShow = (show) => async dispatch => {
  const response = await fetch('http://localhost:3001/api/v1/', {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(show)
  })

  const show = await response.json()

  if (show.error) {
    alert(show.error)
  } else {
    dispatch(addTvShow(show))
    // history.push('/watchlist')
  }
}