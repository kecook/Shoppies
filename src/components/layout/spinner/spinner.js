import React from 'react';
import '../../../assets/spinner.gif';
import './Spinner.css';

const spinner = () => (
  <div className='spinner-div'>
    <img
      className='spinner'
      src={require('../../../assets/spinner.gif')}
      alt='Loading...'
    />
  </div>
);

export default spinner;
