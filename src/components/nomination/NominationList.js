import React from 'react';
import Banner from '../layout/banner/Banner';
import ANomination from './ANomination';
import './NominationList.css';

const NominationList = ({ nominationList, removeFilmFromNominateArray }) => {
  return (
    <div className='nomination-list'>
      <h2 className='title-center'>Your nominations</h2>
      {nominationList.length === 5 && <Banner />}
      <div className>
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
    // </div>
  );
};

export default NominationList;
