import { createStore } from './redux';
import uuid4 from 'uuid4';

const ACTION_TYPES = {
  ADD_NEW_FILM: 'FILM::ADD',
};

export const addNewFilm = film => ({
  type: ACTION_TYPES.ADD_NEW_FILM,
  payload: {
    ...film,
    id: uuid4(),
  },
});

const initialState = {
  films: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_FILM: {
      return {
        ...state,
        films: [...state.films, action.payload],
      };
    }

    default:
      return state;
  }
}

export const store = createStore(reducer);
