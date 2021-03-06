import { SET_CURRENT_USER, LOGOUT_CURRENT_USER } from "./types"
import history from '../history'
import { fetchWatchlistTvShows, clearWatchlist } from './watchList'
import { fetchWatchedTvShows } from './watched'
import { LOCALURL } from './url'


export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
}

export const login = (credentials) => async dispatch => {
  const response = await fetch(`${LOCALURL}login`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })

  const user = await response.json()

  if (user.error) {
    alert(user.error)
  } else {
    dispatch(setCurrentUser(user))
    dispatch(fetchWatchlistTvShows(user.id))
    dispatch(fetchWatchedTvShows(user.id))
    history.push('/')
  }
}

export const logout = () => async dispatch => {
  await fetch(`${LOCALURL}logout`, {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  dispatch(logoutCurrentUser())
  dispatch(clearWatchlist())
  history.push('/')
}

export const getCurrentUser = () => async dispatch => {
  const response = await fetch(`${LOCALURL}current_user`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const user = await response.json()

  if (user.error) {
    console.log(user.error)
  } else {
    dispatch(setCurrentUser(user))
  }
}

export const signup = (credentials) => async dispatch => {
  const response = await fetch(`${LOCALURL}signup`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })

  const newUser = await response.json()

  if (newUser.error) {
    alert("Username has already been taken")
  } else {
    dispatch(setCurrentUser(newUser))
    history.push('/')
  }
}