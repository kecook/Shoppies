import React from 'react';

const SingleNomination = (props) => {
  const { films, removeFilmFromNominateArray } = props; //this is coming from results state
  const { Title, Year } = films;

  return (
    <div className='card text-center'>
            
      <p>
        {Title}({Year})
      </p>
      <button
        className='btn btn-sm'
        onClick={() => removeFilmFromNominateArray(films)}
      >
        Remove Nomination
      </button>
    </div>
  );
};

export default SingleNomination;
