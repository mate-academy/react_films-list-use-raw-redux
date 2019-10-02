import React, { Component } from 'react';
import './App.scss';
import { FilmsList } from './components/FilmsList';
import { NewFilm } from './components/NewFilm';
import { films } from './data';
import { FormField } from './components/FormField';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { FilmList } from './components/FilmsList/FilmsList';
import { NewFilm } from './components/NewFilm/NewFilm';
import { FormField } from './components/FormField/FormField';
import { FilmDetails } from './components/FilmDetails/FilmDetails';
import { store } from './store/index';
import { addNewFilm } from './store/index';

const API_URL = 'http://www.omdbapi.com/?apikey=2f4a38c9&t=';

export class App extends Component {
  state = {
    searchWord: '',
  };

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
          imdbID,
        } = data;

        const newFilm = {
          id: imdbID,
          title: Title,
          description: Plot,
          imgUrl: Poster,
          imdbUrl: Website,
        };

       store.dispatch(addNewFilm(newFilm));
       this.setState({searchWord: ''});
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
                component = {FilmsList}
              />
              <Route
                exact
                path="/film/:id"
                component = {FilmsList}
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
