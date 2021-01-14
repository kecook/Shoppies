import React from 'react';
import Button from '../layout/button/button';
import Spinner from '../layout/spinner/spinner';
import '../../assets/ramona.png';

const AFilm = ({
  movieResult,
  addFilmToNominateArray,
  isNominated,
  loading,
}) => {
  const { Title, Year } = movieResult;
  // if (loading) {
  //   return <Spinner />;
  // } else {
  return (
    <div className='grid'>
      <div className='card text-center'>
          
        <div className='poster-img'>
          {movieResult.Poster === 'N/A' && (
            <img
              className='poster'
              src={require('../../assets/ramona.png')}
              alt='Ramona Quimby waving her hand'
            />
          )}
          {movieResult.Poster !== 'N/A' && (
            <img
              className='poster'
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
        {/* </div>
      <div className='text-center'> */}
        {isNominated && <h4>Nominated!</h4>} 
      </div>
    </div>
  );
};
// };

export default AFilm;
