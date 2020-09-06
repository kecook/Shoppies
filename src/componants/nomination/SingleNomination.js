import React from 'react';

const SingleNomination = (props) => {
  const { films, removeFilmFromNominateArray } = props; //this is coming from results state
  const { Title, Year } = films;

  return (
    <div className=' text-center'>
            
      <p className='text-center'>
        {Title}({Year})
      </p>
      <button
        className='btn btn-sm btn-remove'
        onClick={() => removeFilmFromNominateArray(films)}
      >
        Remove
      </button>
    </div>
  );
};

export default SingleNomination;
