import React from 'react';
import logo from '../../images/uniswap-logo.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='navbar_logo' src={logo} />
      <div className='navbar_menu'>
        <a className='navbar_menu_list active_list'>Swap</a>
        <a className='navbar_menu_list'>Pool</a>
        <a className='navbar_menu_list'>Vote</a>
        <a className='navbar_menu_list'>
          Charts
          <sup>↗</sup>
        </a>
      </div>
      <div className='navbar_options'>
        <div className='navbar_mainnet'>Ethirium</div>
        <div>Connect Wallet</div>
        <div className='navbar_settings'>...</div>
      </div>
    </div>
  );
};

export default Navbar;
