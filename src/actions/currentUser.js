import { SET_CURRENT_USER } from "./types"

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
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
  }
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
    alert(user.error)
  } else {
    dispatch(setCurrentUser(user))
  }
}
