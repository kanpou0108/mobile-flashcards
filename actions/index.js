export const LOAD_FROM_STORAGE = LOAD_FROM_STORAGE;
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD_TO_DESK = 'ADD_CARD_TO_DESK';

export function loadFromStorage(storage) {
  return {
    type: LOAD_FROM_STORAGE,
    storage,
  }
}

export const addDeck = (deck) => (dispatch, getStore) => {
  const lastId = getStore().deck.lastId;
  dispatch({
    type: ADD_DECK,
    deck: {
      ...deck,
      id: lastId+1,
    },
  })
}

export const addCardToDeck = (card, deck) => (dispatch, getStore) => {
  const lastId = getStore().card.lastId;
  dispatch({
    type: ADD_CARD_TO_DESK,
    card: {
      ...card,
      id: lastId + 1,
    },
    deck,
  })
}