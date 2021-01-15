import React from 'react';
import Button from '../layout/button/button';
import '../../assets/ramona.png';
import './AFilm.css';

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
    <div className='card'>
      <div className='text-center'>
          
        <div className='poster-img'>
          <img className='poster' src={imageSource} alt={imageDescription} />
        </div>
        <div className='movie-title'>
          <p className>{Title}</p>
          <p className>({Year})</p>
        </div>
      </div>
      <div className='bottom text-center '>
        {isNominated ? (
          <h4>Nominated!</h4>
        ) : (
          <div className='button'>
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
