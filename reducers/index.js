import { combineReducers } from 'redux';

import {
  ADD_CARD_TO_DESK,
  ADD_DECK,
  LOAD_FROM_STORAGE,
} from '../actions';

import {
  defaultDeck,
  defaultCard
} from '../utils/defaultValues'

const deck = (state = defaultDeck, action) => {
  switch (action.type) {
    case LOAD_FROM_STORAGE: return { ...action.storage.desk }
    case ADD_DECK: {
      const lastId = action.deck.id;
      const list = state.list.concat(lastId);
      const refById = {
        ...state.refById,
        [lastId]: {
          ...action.deck,
          cards: [],
          id: lastId,
        },
      }
      return {
        ...state,
        lastId,
        list,
        refById,
      }
    }
    case ADD_CARD_TO_DESK: {
      const { id } = action.deck;
      const deck = state.refById[id];
      return {
        ...state,
        refById: {
          ...state.refById,
          [id]: {
            ...deck,
            cards: deck.cards.concat(action.card.id),
          }
        }
      }
    }
    default: return state;
  }
}

const card = (state = defaultCard, action) => {
  switch (action.type) {
    case LOAD_FROM_STORAGE: return { ...action.storage.card }
    case ADD_CARD_TO_DESK: {
      const lastId = action.card.id;
      const list = state.list.concat(lastId);
      const refById = {
        ...state.refById,
        [lastId]: {
          ...action.card,
          id: lastId,
        },
      }
      return {
        ...state,
        lastId,
        list,
        refById,
      }
    }
    default: return state;
  }
}

export default combineReducers({ deck, card })