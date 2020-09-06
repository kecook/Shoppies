import React, { Component } from 'react';
import Navbar from './componants/layout/Navbar';
import Search from './componants/results/Search';
import Results from './componants/results/Results';
import Alert from './componants/layout/Alert';
import Nomination from './componants/nomination/Nomination';
import axios from 'axios';
import './App.css';

let movieId;
if (process.env.NODE_ENV !== 'production') {
  movieId = process.env.REACT_APP_API_MOVIE_KEY;
} else {
  movieId = process.env.MOVIE_KEY;
}

class App extends Component {
  state = {
    films: [],
    alert: null,
    nominationList: [],
  };

  // this function accepts a movie title, searches the omdb api and returns an array of 10 movie objects that has the movie title in it

  searchMovies = async (text) => {
    try {
      // const API_KEY = process.env.REACT_APP_API_MOVIE_KEY;
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${movieId}&`,
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

    setTimeout(() => this.setState({ alert: null }), 6000);
  };

  //nominate movies
  addFilmToNominateArray = (films) => {
    // adding this if state so we only add movies to the array when the array is less than or equal to 4.  This is because if we use 5 here, then when the array equals 5, it will still add one more movie
    if (this.state.nominationList.length <= 4) {
      this.setState((state) => ({
        nominationList: [...state.nominationList, films],
      }));
    } else {
      this.setAlert('You can only nominate 5 movies.');
    }
  };

  //
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
          <Search
            searchMovies={this.searchMovies}
            clearMovies={this.clearMovies}
            showClear={this.state.films.length ? true : false}
            setAlert={this.setAlert}
          />
          <Alert alert={this.state.alert} />
        </div>

        <div className='container2'>
          <Results
            films={this.state.films}
            addFilmToNominateArray={this.addFilmToNominateArray}
            nominationList={this.state.nominationList}
          />
          <Nomination
            nominationList={this.state.nominationList}
            removeFilmFromNominateArray={this.removeFilmFromNominateArray}
          />
        </div>
      </div>
    );
  }
}

export default App;
