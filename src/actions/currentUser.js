import { SET_CURRENT_USER } from "./types"

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

const credentials = {
  username: 'chuck',
  password: 'password'
}

export const login = credentials => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
  }
}