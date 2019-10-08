import React, { Component } from 'react';
import './FilmsList.scss';

import { store } from '../../store/reducers';
import FilmCard from '../FilmCard/FilmCard';

export class FilmsList extends Component {
  state = {
    films: store.getState(),
  };

  render() {
    const { films } = this.state;

    return (
      <div className="films">
        {films.map(film => (
          <FilmCard key={film.id} {...film} />
        ))}
      </div>
    );
  }
}
