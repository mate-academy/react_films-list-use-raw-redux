/* eslint-disable max-len */
import { createStore } from './redux';

const ACTION_TYPES = {
  ADD_NEW_FILM: 'FILM::ADD',
};

export const addNewFilm = film => ({
  type: ACTION_TYPES.ADD_NEW_FILM,
  payload: film,
});

const initialState = {
  films: [{
    id: '1',
    title: 'Groundhog Day',
    description: 'A weatherman finds himself inexplicably living the same day over and over again.',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
    imdbUrl: 'https://www.imdb.com/title/tt0107048/',
  }],
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

// console.log('STATE', store.getState());
//
// const unsubscribe1 = store.subscribe((state) => {
//   console.log(state.films.map(({ title }) => title));
// });
//
// store.dispatch(addNewFilm({ title: 'Avengers' }));
//
// store.subscribe((state) => {
//   console.log(state.films);
// });
// unsubscribe1();
//
// store.dispatch(addNewFilm({ title: 'Spider-Man' }));
//
// console.log('STATE', store.getState());
