import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import ethereum from '../../images/ethereum.png';

const NavbarOptions = () => {
  return (
    <div className='navbar_options'>
      <div className='navbar_mainnet'>
        <img className='mainnet_img' src={ethereum} />
        <span>Ethereum</span>
        <BiChevronDown />
      </div>
      <div className='connect_wallet'>Connect Wallet</div>
      <div className='navbar_settings'>...</div>
    </div>
  );
};

export default NavbarOptions;
