import { createStore } from 'redux';

import {
  ACTION_TYPES,
} from './action';

import { films } from '../data';

function reducer(state, action) {
  const { ADD_NEW_FILM } = ACTION_TYPES;

  switch (action.type) {
    case ADD_NEW_FILM: {
      return [ ...state, action.payload];
    }

    default:
      return state;
  }
}

export const store = createStore(reducer, films);
