import React from 'react';
import './FilmsList.scss';

import { store } from '../../store/reducers';
import { FilmCard } from '../FilmCard/FilmCard';

export const FilmsList = () => {
  const films = store.getState();

  return (
    <div className="films">
      {films.map(film => (
        <FilmCard key={film.id} {...film} />
      ))}
    </div>
  );
};
