import React from 'react';
import SingleNomination from './SingleNomination';

const Nomination = (props) => {
  const { nominationList, removeFilmFromNominateArray } = props;

  // console.log('films', films);

  return (
    <div>
      <h2 className='nomination-text '>Your nominations are...</h2>

      {nominationList &&
        nominationList.map((film) => (
          <SingleNomination
            key={film.imdbID + 1}
            films={film}
            removeFilmFromNominateArray={removeFilmFromNominateArray}
          />
        ))}
    </div>
  );
};

export default Nomination;
