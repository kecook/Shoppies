import React from 'react';
import './banner.css';

const Banner = (props) => {
  const { banner, closeBanner } = props;

  return (
    banner !== null && (
    <div className='bannerType'>
    {banner.msg}
    <button className='closeButton' onClick={closeBanner} aria-label='close alert' type='button'>
    
      <span aria-hidden='true'> &times;</span>
      
    </button>
    <p>You are at 5 nominations</p>
    </div>
    )
  );
};

export default Banner;