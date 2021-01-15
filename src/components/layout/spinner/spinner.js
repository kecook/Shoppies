import React from 'react';
import '../../../assets/spinner.gif';
import './Spinner.css';

const Spinner = () => (
  <div className='spinner-div'>
    <img
      className='spinner'
      src={require('../../../assets/spinner.gif')}
      alt='Loading...'
    />
  </div>
);

export default Spinner;
