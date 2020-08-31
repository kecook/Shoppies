import React from 'react';

const Films = (props) => {
  const { films } = props; //this is coming from results state
  const { Title, Year } = films;
  return (
    <div>
            <h2>{Title}</h2>
            <h3>{Year}</h3>
          
    </div>
  );
};

export default Films;
