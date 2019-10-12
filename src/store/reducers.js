import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import {
  ACTION_TYPES,
  addNewFilm,
} from './action';

function reducer(state, action) {
  const { ADD_NEW_FILM, SET_ERROR_MESSAGE } = ACTION_TYPES;
  const { films } = state;

  switch (action.type) {
    case ADD_NEW_FILM: {
      if (films.find((film) => film.id === action.payload.id)) {
        throw new Error('The film is present');
      }

      return {
        ...state,
        films: [...films, action.payload],
      };
    }

    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}

const filmsInitial = [{
  id: '1',
  title: 'Groundhog Day',
  description: `A weatherman finds himself inexplicably
 living the same day over and over again.`,
  imgUrl: 'https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
  imdbUrl: 'https://www.imdb.com/title/tt0107048/',
}];

export const store = createStore(
  reducer,
  { films: filmsInitial, error: null },
  devToolsEnhancer(addNewFilm())
);
