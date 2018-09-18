import { fetchLogin } from '../adapters/authAdapter'
import { LOGIN_USER, TOGGLE_AUTHENTICATING } from './types'

export const loginUser  = (user) => {
  return (dispatch) => {
    fetchLogin(user).then(user => {
      debugger;
      // dispatch({
      //   type: LOGIN_USER,
      //   payload: user
      // })
    })
  }
}

export const toggleAuthenticatingUser = () => {
  return {
    type: TOGGLE_AUTHENTICATING
  }
}
