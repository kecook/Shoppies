import React from 'react';
import './banner.css';

const Banner = (props) => {
  console.log('I rendered');
  return (
    <div className='bannerType'>
      <p>You have 5 nominations</p>
    </div>
  );
};

export default Banner;
