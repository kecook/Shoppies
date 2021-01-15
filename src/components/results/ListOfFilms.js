import React from 'react';
import AFilm from './AFilm';
import Spinner from '../layout/spinner/Spinner';
import './ListOfFilms.css';

const ListOfFilms = ({
  films,
  addFilmToNominateArray,
  nominationList,
  loading,
}) => {
  if (loading) {
    return <Spinner loading={loading} />;
  }
  return (
    <div>
      <h2 className='search-title'>Your search returned...</h2>
      <div className='container2'>
        {/* <div> */}
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
                loading={loading}
              />
            );
          })}
         
      </div>
    </div>
    // </div>
  );
};

export default ListOfFilms;
