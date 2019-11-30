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

// export const login = (credentials) => {
//   return dispatch => {
//     return fetch('http://localhost:3001/api/v1/login', {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(response => response.json())
//       .then(user => {
//         if (user.error) {
//           alert(user.error)
//         } else {
//           dispatch(setCurrentUser(user))
//         }
//       }
//       )
//   }
// }

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/current_user', {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(user => {
        if (user.error) {
          console.log(user.error)
        } else {
          dispatch(setCurrentUser(user))
        }
      }
      )
  }
}