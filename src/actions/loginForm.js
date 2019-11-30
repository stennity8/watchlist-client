import { UPDATE_LOGIN_FORM } from "./types"

export const updateLoginForm = (formData) => {
  return {
    type: UPDATE_LOGIN_FORM,
    payload: formData
  }
}