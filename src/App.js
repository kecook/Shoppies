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
    this.setState(
      (state) => {
        {
          const nominationList = [...state.nominationList, films];
          return nominationList;
        }
      },
      () => console.log(this.state.nominationList)
    );
  };

  //what I'm trying to say. In nominate function, take in the parameter(by this i mean the info they have, maybe state is a better term) of onNominate and films, then move this data into the array called nominationList.

  //to dispay the nomination list: map through the array of nominationList and display earch item in the array.
  //to make sure the list is no longer than five: run a four loop to make sure it stops at five.

  //to remove a title from the nomination list: have a button that will remove an item from the array of nominationList

  //adding movie to nomination list
  // nominationslist = (e.target) =>this.setState({nominationlist.push({film )});

  render() {
    return (
      <div className='App'>
                
        <Navbar name='Shoppies' />
        <div className='container'>
          <Alert alert={this.state.alert} />        
          <Search
            searchMovies={this.searchMovies}
            clearMovies={this.clearMovies}
            showClear={
              this.state.films.length ? true : false //if app breaks on this line add in this.state.films &&
            }
            setAlert={this.setAlert}
          />
             
          <Results
            films={this.state.films}
            addFilmToNominateArray={this.addFilmToNominateArray}
          />
          <Nomination />
        </div>
               
      </div>
    );
  }
}

export default App;
