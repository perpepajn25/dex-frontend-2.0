import { fetchLogin, fetchReauthUser } from '../adapters/authAdapter'
import { LOGIN_USER, TOGGLE_AUTHENTICATING } from './types'
import { decksNormalizer } from '../normalizers/decksNormalizer'


export const loginUser  = (user) => {
  return (dispatch) => {
    fetchLogin(user)
    .then(data => {
      if (data) {
        let normalizedData = decksNormalizer(data.user.decks)
        dispatch(setCurrentUser({username: data.user.username, id: data.user.id}))
        dispatch(setDecksandCards(normalizedData.entities))
        localStorage.setItem('token', data.jwt)
      } else {
        dispatch(toggleAuthenticatingUser)
      }
    })
  }
}

export const reauthUser = () => {
  return (dispatch) => {
    fetchReauthUser()
    .then(user => {
      if (user) {
        let normalizedData = decksNormalizer(user.decks)
        dispatch(setCurrentUser({username: user.username, id: user.id}))
        dispatch(setDecksandCards(normalizedData.entities))
      } else {
        dispatch(toggleAuthenticatingUser())
      }
    })
  }
}

export const toggleAuthenticatingUser = () => {
  return {
    type: TOGGLE_AUTHENTICATING
  }
}

const setCurrentUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: {
      user
    }
  }
}

const setDecksandCards = (data) => {
  const decks = data.decks || []
  const cards = data.cards || []
  const stars = data.stars || []
  const forks = data.forks || []
  return {
    type: 'DECK_LOAD',
    payload: {
      decks,
      cards,
      stars,
      forks
    }
  }
}
