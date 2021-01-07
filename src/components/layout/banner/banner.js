import React from 'react';
import Button from "../button/button"
import './banner.css';

const Banner = (props) => {
  const { banner, closeButton, closeBanner } = props;

  return (
    banner !== null && (
    <div className='bannerType'>
    {/* {banner.msg}
    <button className='closeButton' onClick={closeBanner} aria-label='close alert' type='button'>
      <span aria-hidden='true'> &times;</span>
    </button> */}
    <Button
    text={"X"}
    onClick={() =>closeBanner}
    buttonStyle={'btn--x--corner'} 
    buttonSize={"btn--close"}/>
    <p>You have 5 nominations</p>
    </div>
    )
  );
};

export default Banner;