/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { store } from '../../store/index';
import './FilmsList.scss';
import { FilmCard } from '../FilmCard';

export class FilmsList extends Component {
  state = {
    filmsList: store.getState().films,
  }

  unSubscribe = null;

  componentDidMount() {
    this.unSubscribe = store.subscribe(this.setFilmsList);
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  setFilmsList = () => {
    this.setState({
      filmsList: [...store.getState().films],
    });
  }

  render() {
    const { filmsList } = this.state;
    return (
      <div className="films">
        {filmsList.map(film => (
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
