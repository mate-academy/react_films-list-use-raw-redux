import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import shortid from 'shortid';
import './App.scss';

import { FilmsList } from './components/FilmsList';
import NewFilm from './components/NewFilm/NewFilm';
import FormField from './components/FormField/FormField';
import { FilmDetails } from './components/FilmDetails';

import { store } from './store/reducers';

import {
  addNewFilm,
} from './store/action';

const API_URL = 'https://www.omdbapi.com/?apikey=2f4a38c9&t=';

export class App extends Component {
  state = {
    searchWord: '',
  };

  handleAddFilm = ({
    title,
    description,
    imgUrl,
    imdbUrl,
  }) => {
    store.dispatch(addNewFilm({
      id: shortid.generate(),
      title,
      description,
      imgUrl,
      imdbUrl,
    }));

    this.forceUpdate();
  };

  handleSearchChange = ({ target }) => this.setState({
    searchWord: target.value,
  });

  searchFilm = async(searchWord) => {
    try {
      const filmResponce = await fetch(`${API_URL}${searchWord}`);
      const {
        Title,
        Plot,
        Poster,
        Website,
        imdbID,
      } = await filmResponce.json();

      if (imdbID === undefined) {
        throw new Error('Film not found');
      }

      store.dispatch(addNewFilm({
        id: imdbID,
        title: Title,
        description: Plot,
        imgUrl: Poster,
        imdbUrl: Website,
      }));

      this.forceUpdate();
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    const { filmsList, searchWord } = this.state;

    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <div className="page">
          <div className="content">
            <div className="box">
              <FormField
                value={searchWord}
                name="searchWord"
                placeholder="Type search word"
                label="Search film"
                onChange={this.handleSearchChange}
              />
              <button
                onClick={() => this.searchFilm(searchWord)}
                type="button"
                className="button is-primary"
              >
                Search film
              </button>
            </div>

            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <FilmsList />
                )}
              />
              <Route
                exact
                path="/film/:id"
                render={({ match }) => {
                  const film = filmsList
                    .find(f => String(f.id) === match.params.id);

                  return (
                    <FilmDetails {...film} />
                  );
                }}
              />
            </Switch>
          </div>
          <div className="sidebar">
            <NewFilm onAdd={this.handleAddFilm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
