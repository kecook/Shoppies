import React from 'react';
import Film from './Film';

const Results = ({ films, film }) => {
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

  return (
    <div>
      <h2>Your search returned...</h2>
      {film && films.map((film) => <Film key={film.id} films={film} />)}
    </div>
  );
};

export default Results;
