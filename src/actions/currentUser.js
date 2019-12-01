import { SET_CURRENT_USER, LOGOUT_CURRENT_USER } from "./types"
import history from '../history'

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
  const response = await fetch('http://localhost:3001/api/v1/login', {
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
    history.push('/')
  }
}

export const logout = () => async dispatch => {
  await fetch('http://localhost:3001/api/v1/logout', {
    credentials: "include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  dispatch(logoutCurrentUser())
}

export const getCurrentUser = () => async dispatch => {
  const response = await fetch('http://localhost:3001/api/v1/current_user', {
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

export const signup = () => async dispatch => {

}