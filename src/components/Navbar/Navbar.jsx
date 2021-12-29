import React from 'react';
import logo from '../../images/uniswap-logo.png';
import NavbarMenu from './NavbarMenu.jsx';
import NavbarOptions from './NavbarOptions.jsx';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='navbar_logo' src={logo} />
      <NavbarMenu />
      <NavbarOptions />
    </div>
  );
};

export default Navbar;
