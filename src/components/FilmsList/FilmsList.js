import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FilmsList.scss';
import { FilmCard } from '../FilmCard';
import { store } from '../../store';

export class FilmsList extends Component {
  state = {
    films: store.getState().films,
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        films: store.getState().films,
      });
    });
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
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  })),
};

FilmsList.defaultProps = {
  films: [],
};
