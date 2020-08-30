import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchMovies(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            placeholder='Search movies...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type='submit' value='Search' />
        </form>
      </div>
    );
  }
}

export default Search;
