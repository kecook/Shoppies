import React from 'react';
import Button from '../layout/button/button'
import '../../assets/ramona.png'

const AFilm = (props) => {
  const { movieResult, addFilmToNominateArray, isNominated } = props; //this is coming from results state
  const { Title, Year } = movieResult;

  return (
    <div className='card-flex text-center'>  
      <div className='poster-img'>
      {movieResult.Poster === 'N/A' && (
          <img
            src={require('../../assets/ramona.png')}
            alt='Ramona Quimby waving her hand'
          />
        )}
        {movieResult.Poster !== 'N/A' && (
          <img src={movieResult.Poster} alt='poster provided by database'></img>
        )}
      </div>
      <div className='title-con'>
        <p>
          {Title} ({Year})
        </p>
        {!isNominated && (
          <Button
          text={"Nominate"}
          onClick={() => addFilmToNominateArray(movieResult)}
          disabled={isNominated}
          buttonStyle={"btn--primary--solid"} 
          buttonSize={"btn--medium"}
          />
        )}
        {isNominated && <h4>Nominated!</h4>}
      </div>
         
    </div>
  );
};

export default AFilm;
