import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <h1>{props.name}</h1>
    </nav>
  );
};

export default Navbar;
