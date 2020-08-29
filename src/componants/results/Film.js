import React from 'react';

const Films = (props) => {
  const { title, year, id } = props.films; //this is coming from results state
  return (
    <div>
      <h2>{title}</h2>
      <h3>{year}</h3>
    </div>
  );
};

export default Films;
