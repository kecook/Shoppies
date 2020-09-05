import React from 'react';
import Film from './Film';

const Results = (props) => {
  const { films, addFilmToNominateArray } = props;

  // console.log('films', films);

  return (
    <div>
      <div className='searchDiv'>
             <h2 className='returnTitle'>Your search returned</h2>
        {/* style={resultsStyle}> */}
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

export default Results;
