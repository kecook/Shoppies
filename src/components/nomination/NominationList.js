import React from 'react';
import ANomination from './ANomination';

const nominationList = (props) => {
  const { nominationList, removeFilmFromNominateArray, toggleNominationListHandler } = props;

  

  // console.log('films', films);

  

  return (
    <div>
      <button  onClick={props.toggleNominationListHandler ? true : false}>View my Nominations</button>
      { props.showNominationList === true ?
        <div>
          <h2 className='nomination-text '>Your nominations are...</h2>
            {nominationList &&
            nominationList.map((film) => (
            <ANomination
            key={film.imdbID + 1}
            films={film}
            removeFilmFromNominateArray={removeFilmFromNominateArray}
            />
        ))}
        </div> : null
      }
    </div>
  );
};

export default nominationList;
