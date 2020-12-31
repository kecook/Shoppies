import React from 'react';
import ANomination from './ANomination';

const nominationList = (props) => {
  const { nominationList, removeFilmFromNominateArray } = props;

  return (
    <div>
        <div>
          <h2 className='nomination-text '>Your nominations are...</h2>
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
