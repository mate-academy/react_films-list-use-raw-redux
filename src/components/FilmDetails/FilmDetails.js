/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { store } from '../../store';

export class FilmDetails extends Component {
  state = {
    film: this.findFilm(),
  }

  componentDidMount() {
    store.subscribe(() => {
    });
  }

  componentWillUnmount() {
    store.subscribe(() => {
    });
  }

  findFilm = () => {
    const { match } = this.props;
    const { films } = this.store.getState();

    return films.find(film => String(film.id) === match.params.id);
  }

  render() {
    const { film } = this.state;
    const {
      imgUrl, description, title, imdbUrl,
    } = film;
    console.log('filmfilmfilmfilmfilmfilmfilmfilm', film);
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={imgUrl}
              alt="Film logo"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png"
                  alt="imdb"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>

          <div className="content">
            {description}
            <br />
            <a href={imdbUrl}>IMDB</a>
          </div>
        </div>
      </div>
    );
  }
}

FilmDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

FilmDetails.defaultProps = {
};
