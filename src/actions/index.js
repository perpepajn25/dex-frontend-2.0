import { fetchLogin } from '../adapters/authAdapter'
import { LOGIN_USER, TOGGLE_AUTHENTICATING } from './types'
import { decksNormalizer } from '../normalizers/decksNormalizer'


export const loginUser  = (user) => {
  return (dispatch) => {
    fetchLogin(user).then(data => {
      dispatch(setCurrentUser({username: data.user.username, id: data.user.id}))
      const normalizedData = decksNormalizer(data.user.decks)
      dispatch(setDecksandCards(normalizedData.entities))
      localStorage.setItem('token', data.jwt)
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
  debugger;
  return {
    type: 'DECK_LOAD',
    decks: data.decks,
    cards: data.cards
  }
}
