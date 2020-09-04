import React from 'react';

const Films = (props) => {
  const { films, addFilmToNominateArray } = props; //this is coming from results state
  const { Title, Year } = films;

  return (
    <div className='card text-center'>
            <h3>{Title}</h3>
            <h3>{Year}</h3>
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
