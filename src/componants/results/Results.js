import React, { Component } from 'react';
import Film from './Film';

class Results extends Component {
  // state = {
  //   films: [
  //     {
  //       id: '1',
  //       title: 'Fargo',
  //       year: '1996',
  //     },
  //     {
  //       id: '2',
  //       title: 'Little Woman',
  //       year: '1994',
  //     },

  //     {
  //       id: '3',
  //       title: 'Moon Rise Kingdom',
  //       year: '2012',
  //     },
  //   ],
  // };

  componentDidMount() {}

  render() {
    return (
      <div>
        {this.props.film &&
          this.props.films.map((film) => (
            <Film key={film.id} films={film}></Film>
          ))}
      </div>
    );
  }
}

export default Results;
