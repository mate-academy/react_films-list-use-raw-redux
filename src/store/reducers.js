import { createStore } from 'redux';

import {
  ACTION_TYPES,
} from './action';

const films = [{
  id: '1',
  title: 'Groundhog Day',
  description: 'A weatherman finds himself inexplicably ' +
    'living the same day over and over again.',
  imgUrl: 'https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
  imdbUrl: 'https://www.imdb.com/title/tt0107048/',
}];

function reducer(state, action) {
  const { ADD_NEW_FILM } = ACTION_TYPES;

  switch (action.type) {
    case ADD_NEW_FILM: {
      return [
        ...state,
        action.payload,
      ];
    }

    default:
      return state;
  }
}

export const store = createStore(reducer, films);
