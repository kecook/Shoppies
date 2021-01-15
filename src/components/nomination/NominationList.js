import React from 'react';
import Banner from '../layout/banner/banner';
import ANomination from './ANomination';

const NominationList = ({ nominationList, removeFilmFromNominateArray }) => {
  return (
    <div className='nomination-list'>
      <div className='child'>
        <h2 className='title-center'>Your nominations are...</h2>
        {nominationList.length === 5 && <Banner />}
        <div className='container3'>
          {nominationList &&
            nominationList.map((film) => (
              <ANomination
                key={film.imdbID + 1}
                films={film}
                removeFilmFromNominateArray={removeFilmFromNominateArray}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NominationList;
