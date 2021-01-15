import React from 'react';
import './Navbar.css';

const Navbar = ({ name }) => {
  return (
    <nav className='navbar'>
      <h1>{name}</h1>
    </nav>
  );
};

export default Navbar;
