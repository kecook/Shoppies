import React from 'react';

const Navbar = ({ name }) => {
  return (
    <nav className='navbar'>
      <h1>{name}</h1>
    </nav>
  );
};

export default Navbar;
