import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import uuidv4 from 'uuidv4';
import './App.scss';

import FilmsList from './components/FilmsList/FilmsList';
import NewFilm from './components/NewFilm/NewFilm';
import FormField from './components/FormField/FormField';
import FilmDetails from './components/FilmDetails/FilmDetails';

import { store } from './store/reducers';

import {
  addNewFilm,
} from './store/action';

const API_URL = 'https://www.omdbapi.com/?apikey=2f4a38c9&t=';

export class App extends Component {
  state = {
    searchWord: '',
    error: null,
  };

  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.setState({ error: null });
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  handleAddFilm = ({
    title,
    description,
    imgUrl,
    imdbUrl,
  }) => {
    store.dispatch(addNewFilm({
      id: uuidv4(),
      title,
      description,
      imgUrl,
      imdbUrl,
    }));
  };

  handleSearchChange = ({ target }) => this.setState({
    searchWord: target.value,
    error: null,
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
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { searchWord, error } = this.state;

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="page">
          <div className="content">
            <div className="box">
              <FormField
                error={error}
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
                component={() => (
                  <FilmsList />
                )}
              />
              <Route
                exact
                path="/film/:id"
                component={({ match }) => (
                  <FilmDetails id={match.params.id} />
                )}
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
