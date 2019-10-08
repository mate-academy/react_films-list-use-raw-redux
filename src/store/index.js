import { createStore } from './redux';

const ACTION_TYPES = {
  ADD_NEW_FILM: 'FILM::ADD',
};

export const addNewFilm = film => ({
  type: ACTION_TYPES.ADD_NEW_FILM,
  payload: {
    ...film,
    id: store.getState().films.length,
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
