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
    films: [], // loading: false,
    alert: null,
    nominate: [],
  };

  // this function accepts a movie title, searches the omdb api and returns an array of 10 movie objects that has the movie title in it

  searchMovies = async (text) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=f41dfb7f&s=${text}`
    );

    const { data } = response;
    const { Search } = data;

    // console.log('lets see what search is', Search);

    this.setState({ films: Search });
  };

  //clear search movies from state
  clearMovies = () => this.setState({ films: [] });

  //set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  //nominate movies
  nominate = (films, nominate) => {
    nominate.push({ films });
    console.log(nominate);
  };
  // nominate = (films, nomiate) => {
  //   this.setState = nominate.push(films);
  // };

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
            showClear={this.state.films.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
                  
          <Results films={this.state.films} nominate={this.state.nominate} />
          <Nomination />
           
        </div>
               
      </div>
    );
  }
}

export default App;
