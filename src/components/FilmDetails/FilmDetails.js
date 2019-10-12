/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import { store } from '../../store/reducers';

const FilmDetails = ({ match }) => {
  const {
    title,
    imgUrl,
    description,
    imdbUrl,
  } = store.getState().films.find((item) => item.id === match.params.id);

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
};

FilmDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FilmDetails;
