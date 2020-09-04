import React from 'react';
import Film from './Film';

const Results = (props) => {
  const { films, addFilmToNominateArray } = props;

  // console.log('films', films);

  return (
    <div>
            <h2>Your search returned...</h2> 
      <div style={resultsStyle}>
        {films &&
          films.map((film) => (
            <Film
              key={film.imdbID}
              films={film}
              addFilmToNominateArray={addFilmToNominateArray}
            />
          ))}
         
      </div>
          
    </div>
  );
};

const resultsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem',
};

export default Results;
