import React, { Component } from 'react';
import Navbar from './components/layout/navbar/Navbar';
import SearchBar from './components/layout/searchBar/SearchBar';
import ListOfFilms from './components/results/ListOfFilms';
import Alert from './components/layout/alert/Alert';
import NominationList from './components/nomination/NominationList';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    films: [],
    alert: null,
    nominationList: [],
  };

  // this function accepts a movie title, searches the omdb api and returns an array of 10 movie objects that has the movie title in it

  searchForMovies = async (text) => {
    try {
      const REACT_APP_API_MOVIE_KEY = process.env.REACT_APP_API_MOVIE_KEY;
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${REACT_APP_API_MOVIE_KEY}&s&type`,
        {
          params: { s: text, type: 'movie' },
        }
      );
      const { data } = response;
      const { Search } = data;

      if (data.Response === 'True') {
        this.setState({ films: Search });
      } else if (data.Error === 'Movie not found!') {
        this.setAlert(
          'Your search did not return any matches.Please try again'
        );
      } else if (data.Error === 'Too many results.') {
        this.setAlert(
          'Your search generated too many results.  Please enter a more specific search term.'
        );
      } else {
        this.setAlert(
          'We encountered an unknown error, please try another search term'
        );
      }
    } catch (error) {
      if (error === 'Error: Network Error') {
        this.setAlert(
          'We cannot reach the movie database.  Please check your internet connection'
        );
      } else {
        this.setAlert('We encountered an unknown error, please try again');
      }
    }
  };

  //clear search movies from state
  clearMovies = () => this.setState({ films: [] });

  //set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    // setTimeout(() => this.setState({ alert: null }), 6000);
  };

  //close Alert
  closeAlert = () => {
    this.setState({ alert: null });
  };

  //setBanner
  setBanner = (msg, type) => {
    this.setState({ banner: { msg, type } });
  };

  //nominate movies
  addFilmToNominateArray = (films) => {
    // adding this if state so we only add movies to the array when the array is less than or equal to 4.  This is because if we use 5 here, then when the array equals 5, it will still add one more movie
    if (this.state.nominationList.length <= 4) {
      this.setState((state) => ({
        nominationList: [...state.nominationList, films],
      }));
    } else {
      this.setAlert('You have exceeded the nomination limit.');
    }
  };

  //remove films
  removeFilmFromNominateArray = (films) => {
    this.setState((state) => ({
      nominationList: state.nominationList.filter(
        (film) => film.imdbID !== films.imdbID //we use the imdbID here because it is a unique ID
      ),
    }));
  };

  render() {
    return (
      <div className='App'>
        <Navbar name='Shoppies' />
        <div className='container'>
          <SearchBar
            searchForMovies={this.searchForMovies}
            clearMovies={this.clearMovies}
            showClearButton={this.state.films.length ? true : false}
            setAlert={this.setAlert}
          />
          <Alert alert={this.state.alert} closeAlert={this.closeAlert} />
        </div>

        <div className='container2'>
          <ListOfFilms
            films={this.state.films}
            addFilmToNominateArray={this.addFilmToNominateArray}
            nominationList={this.state.nominationList}
          />

          {this.state.nominationList.length !== 0 ? (
            <NominationList
              nominationList={this.state.nominationList}
              removeFilmFromNominateArray={this.removeFilmFromNominateArray}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
