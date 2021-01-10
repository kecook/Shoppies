import React from 'react';
import '../../../assets/spinner.gif';

const spinner = () => (
  <div>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </div>
);

export default spinner;
