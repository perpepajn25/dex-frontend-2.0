import { normalize, schema } from 'normalizr'

const card = new schema.Entity('cards')
const star = new schema.Entity('stars')
const fork = new schema.Entity('forks')
const deck = new schema.Entity('decks', {
  cards: [card],
  forks: [fork],
  stars: [star]
}
)

const deckList = [ deck ]

export function decksNormalizer(deckData) {
  return normalize(deckData,deckList)
}

export function deckNormalizer(deckData) {
  return normalize(deckData, deck)
}
