import React from 'react';
import AFilm from './AFilm';
import Spinner from '../layout/spinner/spinner';

const ListOfFilms = ({
  films,
  addFilmToNominateArray,
  nominationList,
  loading,
}) => {
  if (loading) {
    return <Spinner loading={this.state.loading} />;
  } else {
    return (
      <div>
        <h2 className='title-center'>Your search returned...</h2>
        <div className='container2'>
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
      </div>
    );
  }
};

export default ListOfFilms;
