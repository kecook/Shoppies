import React from 'react';

const Films = (props) => {
  const { films, addFilmToNominateArray, isNominated } = props; //this is coming from results state
  const { Title, Year } = films;

  return (
    <div className='card-flex text-center'>
        
      <div className='poster-img'>
        <img src={films.Poster} alt='poster provided by database' />
      </div>
      <div className='title-con'>
        <p>
          {Title} ({Year})
        </p>
        <h2>hello</h2>
        {!isNominated && (
          <button
            className='btn btn-sm btn-nom'
            onClick={() => addFilmToNominateArray(films)}
            disabled={isNominated}
          >
            Nominate
          </button>
        )}
        {isNominated && <h4>Nominated!</h4>}
      </div>
         
    </div>
  );
};

export default Films;
