import { combineReducers } from 'redux'
import authReducer from './authReducer'
// import deckReducer from './deckReducer'
// import cardReducer from './cardReducer'
// import publicDeckReducer from './publicDeckReducer'
// import publicCardReducer from './publicCardReducer'

const appReducer = combineReducers({
    auth: authReducer
    // decks: deckReducer,
    // cards: cardReducer,
    // publicDecks: publicDeckReducer,
    // publicCards: publicCardReducer
  })


export default appReducer
