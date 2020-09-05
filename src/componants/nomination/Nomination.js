import React from 'react';
import SingleNomination from './SingleNomination';

const Nomination = (props) => {
  const { nominationList, removeFilmFromNominateArray } = props;

  // console.log('films', films);

  return (
    <div className='nominationDiv resultsStyle'>
        <h2 className='nominationTitle'>Your nominations</h2>
      {nominationList &&
        nominationList.map((film) => (
          <SingleNomination
            key={film.imdbID + 1} // we add 1 here because we are using film.imdbID as the key here in nomination and also in Results.  Remove + 1 and see the error you get in the console log.  You will get an error that keys must be unique.  This is happening because <SingleNomination/> and <Films/> are both using imdbID as the key, therefore there are two components with the same key.  By adding 1 here, we are making this key different than the key in <Film/>
            films={film}
            removeFilmFromNominateArray={removeFilmFromNominateArray}
          />
        ))}
    </div>
  );
};

export default Nomination;
