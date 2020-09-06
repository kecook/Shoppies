import React from 'react';
import Film from './Film';

const Results = (props) => {
  const { films, addFilmToNominateArray, nominationList } = props;

  return (
    <div className='search-div'>
       <h2 className='text-center'>Your search returned...</h2>
      {films &&
        films.map((filmInSearchResults) => {
          const isNominated = nominationList.find(
            (nominatedMovie) =>
              nominatedMovie.imdbID === filmInSearchResults.imdbID
          );
          return (
            <Film
              key={filmInSearchResults.imdbID}
              films={filmInSearchResults}
              addFilmToNominateArray={addFilmToNominateArray}
              isNominated={isNominated}
            />
          );
        })}
       
    </div>
  );
};

export default Results;
