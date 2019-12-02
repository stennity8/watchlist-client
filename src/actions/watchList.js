import { LOAD_WATCHLIST, ADD_TVSHOW_TO_WATCHLIST, CLEAR_WATCHLIST } from "./types"
// import history from '../history'

export const loadTvShowWatchlist = shows => {
  return {
    type: LOAD_WATCHLIST,
    payload: shows
  }
}

export const addTvShow = show => {
  return {
    type: ADD_TVSHOW_TO_WATCHLIST,
    payload: show
  }
}

export const clearWatchlist = () => {
  return { type: CLEAR_WATCHLIST }
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
    dispatch(addTvShow(newShow))
    // history.push('/watchlist')
  }
}

export const fetchWatchlistTvShows = (userId) => async dispatch => {
  const response = await fetch(`http://localhost:3001/api/v1/users/${userId}/unwatched_tvshows`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })

  const shows = await response.json()
  if (shows.error) {
    alert(shows.error)
  } else {
    dispatch(loadTvShowWatchlist(shows))
    // history.push('/watchlist')
  }
}