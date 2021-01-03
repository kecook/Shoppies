import React from 'react';
import Button from '../layout/button/button'; 


const ANomination = (props) => {
  const { films, removeFilmFromNominateArray } = props; //this is coming from results state
  const { Title, Year } = films;

  return (
    <div className=' text-center'>
            
      <p className='text-center'>
        {Title}({Year})
      </p>

      <Button
      text={"Remove"}
      onClick={() => removeFilmFromNominateArray(films)}
      buttonStyle={"btn--scuba--solid"} 
      buttonSize={"btn--medium"}
      />
        
    </div>
  );
};

export default ANomination;
