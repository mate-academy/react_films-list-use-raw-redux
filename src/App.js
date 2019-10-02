import React, { Component } from 'react';
import './App.scss';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { FilmsList } from './components/FilmsList';
import { NewFilm } from './components/NewFilm';
import { films } from './data';
import { store, addNewFilm } from './store/index';
import { FormField } from './components/FormField';
import { FilmDetails } from './components/FilmDetails';

const API_URL = 'http://www.omdbapi.com/?apikey=2f4a38c9&t=';

store.dispatch(addNewFilm(...films));

export class App extends Component {
  state = {
    searchWord: '',
  };

  componentDidMount() {
    this.searchFilm('spider');
  }

  handleAddFilm = (newFilm) => {
    store.dispatch(addNewFilm(newFilm));
  };

  handleSearchChange = ({ target }) => {
    this.setState({ searchWord: target.value });
  };

  searchFilm = (searchWord) => {
    fetch(`${API_URL}${searchWord}`)
      .then(response => response.json())
      .then((data) => {
        const {
          Title,
          Plot,
          Poster,
          Website,
        } = data;

        const newFilm = {
          title: Title,
          description: Plot,
          imgUrl: Poster,
          imdbUrl: Website,
        };

        store.dispatch(addNewFilm(newFilm));
      });
  };

  render() {
    const { searchWord } = this.state;
    return (
      <HashRouter>
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
                component={FilmsList}
              />
              <Route
                exact
                path="/film/:id"
                component={FilmDetails}
              />
            </Switch>
          </div>
          <div className="sidebar">
            <NewFilm onAdd={this.handleAddFilm} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
