import React from 'react';

const Films = (props) => {
  const { films } = props; //this is coming from results state
  const { Title, Year, Type } = films;
  const { nominate } = [];

  // onClick = (nominate) => {
  //   this.props.nominate = nominate.push({ films });
  // };
  return (
    <div className='card text-center'>
            <h3>{Title}</h3>
            <h3>{Year}</h3>
      <h3>{Type}</h3>
      <button className='btn btn-sm' onClick={props.nominate}>
        Nominate
      </button>
    </div>
  );
};

export default Films;
