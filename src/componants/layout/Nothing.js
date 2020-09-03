import React from 'react';

const Nothing = ({ nothing }) => {
  return (
    nothing !== null && (
      <div className={`alert alert-${nothing.type}`}>{nothing.msg}</div>
    )
  );
};

export default Nothing;
