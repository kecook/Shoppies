import React from 'react';
import AFilm from './AFilm';

const ListOfFilms = (props) => {
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
            <AFilm
              key={filmInSearchResults.imdbID}
              movieResult={filmInSearchResults}
              addFilmToNominateArray={addFilmToNominateArray}
              isNominated={isNominated}
            />
          );
        })}
       
    </div>
  );
};

export default ListOfFilms;
