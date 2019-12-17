import {
  LOAD_WATCHED,
} from "./types"

import { LOCALURL } from './url'

export const loadWatchedTvShows = shows => {
  return {
    type: LOAD_WATCHED,
    payload: shows
  }
}

export const fetchWatchedTvShows = (userId) => async dispatch => {
  const response = await fetch(`${LOCALURL}users/${userId}/watched_tvshows`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })

  const shows = await response.json()
  if (shows.error) {
    alert(shows.error)
  } else {
    dispatch(loadWatchedTvShows(shows))
  }
}