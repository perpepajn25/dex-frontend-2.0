import { LOGIN_USER, LOGOUT_USER, TOGGLE_AUTHENTICATING  } from '../actions/types'


const initialState = {
  authenticating: true,
  currentUser: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type){

    case LOGIN_USER:
    return {
      authenticating: false,
      currentUser: {
        id: action.payload.user.id,
        username: action.payload.user.username
      }
    }

    case LOGOUT_USER:
    return {
      ...state,
      currentUser: {}
    }

    case TOGGLE_AUTHENTICATING:
    return {
      ...state,
      authenticating: !state.authenticating
    }

    default:
    return state

  }
}

export default authReducer
