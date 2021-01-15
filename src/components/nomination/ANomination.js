import React from 'react';
import Button from '../layout/button/button';
import './NominationList.css';

const ANomination = ({ films, removeFilmFromNominateArray }) => {
  const { Title, Year } = films;
  return (
    <div>
          
      <p className='text-center'>{Title}</p>
      <p>({Year})</p>
      <Button
        text='Remove'
        onClick={() => removeFilmFromNominateArray(films)}
        buttonStyle={'btn--scuba--solid'}
        buttonSize={'btn--medium'}
      />
    </div>
  );
};

export default ANomination;
