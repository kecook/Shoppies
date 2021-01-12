import React from 'react';
import Button from '../layout/button/button';
import '../../assets/ramona.png';

const AFilm = ({ movieResult, addFilmToNominateArray, isNominated }) => {
  const { Title, Year } = movieResult;

  return (
    <div className='grid'>
      <div className='card text-center'>
          
        <div className='poster-img'>
          {movieResult.Poster === 'N/A' && (
            <img
              src={require('../../assets/ramona.png')}
              alt='Ramona Quimby waving her hand'
            />
          )}
          {movieResult.Poster !== 'N/A' && (
            <img
              src={movieResult.Poster}
              alt='poster provided by database'
            ></img>
          )}
        </div>
        {/* <div className='text-center'> */}
        <p>{Title}</p>
        <p>({Year})</p>
        {/* </div> */}
      </div>
      <div className='bottom text-center '>
        {!isNominated && (
          <Button
            text={'Nominate'}
            onClick={() => addFilmToNominateArray(movieResult)}
            disabled={isNominated}
            buttonStyle={'btn--primary--solid'}
            buttonSize={'btn--medium'}
          />
        )}
        {/* </div>
      <div className='text-center'> */}
        {isNominated && <h4>Nominated!</h4>}
          
      </div>
       
    </div>
  );
};

export default AFilm;
