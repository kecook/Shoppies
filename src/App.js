import React, { Component } from 'react';
import Navbar from './componants/layout/Navbar';
// import Film from './results/Film';
import Results from './componants/results/Results';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    films: null,
    // loading: false,
  };

  async componentDidMount() {
    // this.setState({ loading: true });

    const res = await axios.get(
      'http://www.omdbapi.com/?i=tt3896198&apikey=f41dfb7f'
    );

    console.log(res.data);

    this.setState({ films: [res.data] });
  }

  render() {
    return (
      <div className='App'>
        <Navbar name='Shoppies' />
        <Results films={this.state.films} />
      </div>
    );
  }
}

export default App;
