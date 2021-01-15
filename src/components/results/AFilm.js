import React from 'react';
import Button from '../layout/button/button';
import '../../assets/ramona.png';

const AFilm = ({ movieResult, addFilmToNominateArray, isNominated }) => {
  const { Title, Year } = movieResult;
  const imageSource =
    movieResult.Poster === 'N/A'
      ? require('../../assets/ramona.png')
      : movieResult.Poster;
  const imageDescription =
    movieResult.Poster === 'N/A'
      ? 'Ramona Quimby waving her hand'
      : 'Movie poster image from database';
  return (
    <div className='grid'>
      <div className='card text-center'>
          
        <div className='poster-img'>
          <img className='poster' src={imageSource} alt={imageDescription} />
        </div>
        <p>{Title}</p>
        <p>({Year})</p>
      </div>
      <div className='bottom text-center '>
        {isNominated ? (
          <h4>Nominated!</h4>
        ) : (
          <div className='button wrapper'>
            <Button
              text={'Nominate'}
              onClick={() => addFilmToNominateArray(movieResult)}
              disabled={isNominated}
              buttonStyle={'btn--primary--solid'}
              buttonSize={'btn--medium'}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AFilm;
