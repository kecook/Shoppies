import React from 'react';
import Button from '../layout/button/button';

const ANomination = ({ films, removeFilmFromNominateArray }) => {
  const { Title, Year } = films;
  return (
    <div className='grid'>
      <div className='card-nom '>
            
        <p className='text-center'>{Title}</p>
        <p>({Year})</p>
      </div>
      <div className='bottom-nom'>
        <Button
          text={'Remove'}
          onClick={() => removeFilmFromNominateArray(films)}
          buttonStyle={'btn--scuba--solid'}
          buttonSize={'btn--medium'}
        />
      </div>
    </div>
  );
};

export default ANomination;
