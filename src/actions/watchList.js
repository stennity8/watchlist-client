import { ADD_TVSHOW_TO_WATCHLIST } from "./types"
// import history from '../history'

export const addTvShow = show => {
  return {
    type: ADD_TVSHOW_TO_WATCHLIST,
    payload: show
  }
}

export const postTvShow = (show, userId) => async dispatch => {
  const response = await fetch(`http://localhost:3001/api/v1/users/${userId}/add_watchlist_tvshow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(show)
  })

  const newShow = await response.json()
  if (newShow.error) {
    alert(newShow.error)
  } else {
    console.log(newShow)
    // dispatch(addTvShow(newShow))
    // history.push('/watchlist')
  }
}