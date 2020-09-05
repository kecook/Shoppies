import React from 'react';

const Films = (props) => {
  const { films, addFilmToNominateArray } = props; //this is coming from results state
  const { Title, Year } = films;

  return (
    <div className='card text-center'>
            
      <p>
        {Title} ({Year})
      </p>
      <button
        className='btn btn-sm'
        onClick={() => addFilmToNominateArray(films)}
      >
        Nominate
      </button>
    </div>
  );
};

export default Films;
