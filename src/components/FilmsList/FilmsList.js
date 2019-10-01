import React from 'react';
import './FilmsList.scss';
import { FilmCard } from '../FilmCard';
import store from '../../store';

export class FilmsList extends React.Component {
  state = {
    films: store.getState().films,
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        films: store.getState().films,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

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
};
