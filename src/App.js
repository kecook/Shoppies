import React, { Component } from 'react';
import Navbar from './componants/layout/Navbar';
import Search from './componants/results/Search';
// import Film from './results/Film';
import Results from './componants/results/Results';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    films: null, // loading: false,
  }; // async componentDidMount() { //   console.log('f41dfb7f'); //   // this.setState({ loading: true }); //   const res = await axios.get( //     // `http://www.omdbapi.com/?apikey={process.env.REACT_APP_MOVIE_KEY}&t=fargo` //     'http://www.omdbapi.com/?apikey=f41dfb7f&t=fargo' //   ); //   console.log(res.data); //   this.setState({ films: [res.data] }); // } //search movies

  // this function accepts   a movie title, searches the omdb api and returns an array of 10 movie objects that has the movie title in it

  searchMovies = async (text) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=f41dfb7f&s=${text}`
    );

    const { data } = response;
    const { Search } = data;

    console.log('lets see what search is', Search);

    this.setState({ films: Search });
  };

  render() {
    return (
      <div className='App'>
                
        <Navbar name='Shoppies' />
                
        <Search searchMovies={this.searchMovies} />
                
        <Results films={this.state.films} />
              
      </div>
    );
  }
}

export default App;
