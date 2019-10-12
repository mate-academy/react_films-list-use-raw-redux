import React, { Component } from 'react';
import './FilmsList.scss';

import { store } from '../../store/reducers';
import FilmCard from '../FilmCard/FilmCard';

export class FilmsList extends Component {
  state = {
    films: store.getState().films,
  };

  componentDidMount() {

    this.unSubscribe = store.subscribe(() => {
      const { films } = this.state;
      const newFilms = store.getState().films;

      if (films.length !== newFilms.length) {
        this.setState({
          films: store.getState().films,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    const { films } = this.state;

    return (
      <div className="films">
        {films.map((film) => (
          <FilmCard key={film.id} {...film} />
        ))}
      </div>
    );
  }
}
