import React, { Component } from 'react';
import Navbar from './componants/layout/Navbar';
import Search from './componants/results/Search';
import Results from './componants/results/Results';
import Alert from './componants/layout/Alert';
// import Film from './componants/results/Film';
import Nomination from './componants/nomination/Nomination';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    films: [],
    alert: null,
    nominationList: [],
  };

  // this function accepts a movie title, searches the omdb api and returns an array of 10 movie objects that has the movie title in it
  searchMovies = async (text) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=f41dfb7f`,
        {
          params: { s: text, type: 'movie' },
        }
      );

      const { data } = response;
      console.log('response', response);
      console.log('response.data.Response', data.Response);
      const { Search } = data;

      console.log('lets see what search is', Search);
      if (data.Response === 'True') {
        this.setState({ films: Search });
      } else if (data.Error === 'Movie not found!') {
        this.setAlert(
          'There are no movies in our database that match your search.  Please try again'
        );
      } else if (data.Error === 'Too many results.') {
        this.setAlert(
          'Your search generated too many results for us to display.  Please enter a more specific search term.'
        );
      } else {
        this.setAlert(
          'We encountered an unknown error, please try another search term'
        );
      }
    } catch (error) {
      console.log('error', error);
      if (error == 'Error: Network Error') {
        console.log('we have a network error');
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

    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  //nominate movies
  addFilmToNominateArray = (films) => {
    // adding this if state so we only add movies to the array when the array is less than or equal to 4.  This is because if we use 5 here, then when the array equals 5, it will still add one more movie
    if (this.state.nominationList.length <= 4) {
      this.setState(
        (state) => ({ nominationList: [...state.nominationList, films] }),
        () =>
          console.log('this.state.nominationList', this.state.nominationList)
      );
    } else {
      this.setAlert(
        'You can only nominate 5 movies.  You have already nominated 5.  '
      );
    }
  };

  //
  removeFilmFromNominateArray = (films) => {
    this.setState(
      (state) => ({
        nominationList: state.nominationList.filter(
          //state.nominationList.filter filers out the one we want to remove.  Read about .filter on arrays in Javascript on the Mozilla website.
          (film) => film.imdbID !== films.imdbID //we use the imdbID here because it is a unique ID
        ),
      }),
      () =>
        console.log(
          'this.state.nominationList in removeFilmFromNominateArray',
          this.state.nominationList
        )
    );
  };

  render() {
    return (
      <div className='App'>
        <Navbar name='Shoppies' />
        <div className='container'>
          <Search
            searchMovies={this.searchMovies}
            clearMovies={this.clearMovies}
            showClear={
              this.state.films.length ? true : false //if app breaks on this line add in this.state.films &&
            }
            setAlert={this.setAlert}
          />
          <Alert alert={this.state.alert} />
        </div>

        <div className='container2'>
          <Results
            films={this.state.films}
            addFilmToNominateArray={this.addFilmToNominateArray}
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
