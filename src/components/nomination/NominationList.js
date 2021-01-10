import React from 'react';
import Banner from '../layout/banner/banner';
import ANomination from './ANomination';

const nominationList = ({ nominationList, removeFilmFromNominateArray }) => {
  return (
    <div className='nomination-list all-center'>
      <h2 className='title-center'>Your nominations are...</h2>
      {nominationList.length === 5 ? <Banner /> : null}
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
  );
};

export default nominationList;
