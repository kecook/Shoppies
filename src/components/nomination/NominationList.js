import React from 'react';
import Banner from '../layout/banner/banner';
import ANomination from './ANomination';

const nominationList = (props) => {
  const { nominationList, removeFilmFromNominateArray, closeBanner} = props;

   

  return (
    <div>
        <div>
          <h2 className='nomination-text '>Your nominations are...</h2>
          {nominationList.length ===5?
          <Banner
          />:null}
            {nominationList &&
            nominationList.map((film) => (
            <ANomination
            key={film.imdbID + 1}
            films={film}
            removeFilmFromNominateArray={removeFilmFromNominateArray}
            />
        ))}
        
        </div> 
    </div>
  );
};

export default nominationList;
