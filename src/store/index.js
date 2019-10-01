import { createStore } from './redux';

const ACTION_TYPES = {
  ADD_NEW_FILM: 'FILM::ADD',
  FIND_NEW_FILM: 'FILM::FIND'
};

export const addNewFilm = film => ({
  type: ACTION_TYPES.ADD_NEW_FILM,
  payload: film,
});

export const findNewFilm = film => ({
  type: ACTION_TYPES.FIND_NEW_FILM,
  payload: film,
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

    case ACTION_TYPES.FIND_NEW_FILM: {
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
