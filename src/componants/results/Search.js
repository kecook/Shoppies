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
    if (!this.state.text) {
      this.props.setAlert('Field can not be left blank');
    } else {
      this.props.searchMovies(this.state.text);
      this.setState({ text: '' });
    }
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
          <input className='btn  btn-block' type='submit' value='Search' />
        </form>

        {this.props.showClear && (
          <button
            className='btn  btn-block btn-clear'
            onClick={this.props.clearMovies}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
