import React from 'react';
import Film from './Film';

const Results = (props) => {
  const { films } = props;

  console.log('films', films);

  return (
    <div>
            <h2>Your search returned...</h2>
            
      {films && films.map((film) => <Film key={film.imdbID} films={film} />)}
          
    </div>
  );
};

export default Results;
