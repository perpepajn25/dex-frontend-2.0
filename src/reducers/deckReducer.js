import { LOAD_DECK } from '../actions/types'

export default function deckReducer(state = {byId:{}, allId: []} , action){
  switch(action.type){
    case LOAD_DECK:
    return {
      ...state,
      byId: action.payload.decks,
      allId: Object.keys(action.payload.decks)
    }

    case 'CREATE_DECK_AND_CARDS':
      return {
        ...state,
        byId: {...state.byId, ...action.deck},
        allId: [...state.allId, ...Object.keys(action.deck)]
      }

    case 'DELETE_CARD':
      let deleteFromDeck = Object.assign({}, state.byId[action.deckId])
      deleteFromDeck.cards = deleteFromDeck.cards.filter((card)=>{
        return card !== action.cardId
      })
      return {
        ...state,
        byId: {...state.byId, [action.deckId]: deleteFromDeck}
      }

    case 'DELETE_DECK':
      let filteredDecks = Object.assign({}, state.byId)
      delete filteredDecks[action.deckId]
      return {
        ...state,
        byId: filteredDecks,
        allId: state.allId.filter((deckId)=>{
          return deckId !== action.deckId
        })
      }

    case 'ADD_CARD':
      let deck = Object.assign({},state.byId[action.card.deck_id])
      deck.cards = [...deck.cards, action.card.id]
      return {
        ...state,
        byId: {...state.byId,[action.card.deck_id]: deck}
      }

    default:
      return state
  }
}
