import React from 'react';

const Films = (props) => {
  const { movieResult, addFilmToNominateArray, isNominated } = props; //this is coming from results state
  const { Title, Year } = movieResult;

  return (
    <div className='card-flex text-center'>
        
      <div className='poster-img'>
        <img src={movieResult.Poster} alt='poster provided by database' />
      </div>
      <div className='title-con'>
        <p>
          {Title} ({Year})
        </p>
        {!isNominated && (
          <button
            className='btn btn-sm btn-nom'
            onClick={() => addFilmToNominateArray(movieResult)}
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
