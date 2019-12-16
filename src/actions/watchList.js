import {
  LOAD_WATCHLIST,
  ADD_TVSHOW_TO_WATCHLIST,
  CLEAR_WATCHLIST,
  UPDATE_TVSHOW_TO_WATCHED,
  REMOVE_TVSHOW_FROM_WATCHLIST
} from "./types"

// // URL for deployment
// const URL = 'https://watchlist-backend-api.herokuapp.com/api/v1/'

// URL for local development
const URL = 'http://localhost:3001/api/v1/'

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

export const updateTvShowWatchList = ids => {
  return {
    type: UPDATE_TVSHOW_TO_WATCHED,
    payload: ids
  }
}

export const removeTvShowFromWatchList = ids => {
  return {
    type: REMOVE_TVSHOW_FROM_WATCHLIST,
    payload: ids
  }
}

export const postTvShow = (show, userId) => async dispatch => {
  const response = await fetch(`${URL}users/${userId}/add_watchlist_tvshow`, {
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
  }
}

export const fetchWatchlistTvShows = (userId) => async dispatch => {
  const response = await fetch(`${URL}users/${userId}/unwatched_tvshows`, {
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
  }
}

export const postTvShowWatchListUpdate = (showId, userId) => async dispatch => {
  const response = await fetch(`${URL}users/${userId}/watched_tvshow/${showId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const ids = await response.json()

  if (ids.error) {
    alert(ids.error)
  } else {
    dispatch(updateTvShowWatchList(ids))
  }
}

export const deleteTvShowWatchList = (showId, userId) => async dispatch => {
  const response = await fetch(`${URL}users/${userId}/remove_tvshow/${showId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const ids = await response.json()

  if (ids.error) {
    alert(ids.error)
  } else {
    dispatch(removeTvShowFromWatchList(ids))
  }
}