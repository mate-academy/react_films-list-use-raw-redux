import React from 'react';
import PropTypes from 'prop-types';
import './FilmsList.scss';
import { store } from '../../store/index';
import { FilmCard } from '../FilmCard';

export class FilmsList extends React.Component {
  state = {
    filmsList: store.getState().films,
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleStoreChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleStoreChange = () => {
    const { films } = store.getState();

    this.setState({
      filmsList: films,
    });
  };

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
