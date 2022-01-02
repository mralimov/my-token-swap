import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import ethereum from '../../images/ethereum.png';
// import { useMoralis } from 'react-moralis';

const NavbarOptions = () => {
  // const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <div className='navbar_options'>
      <div className='navbar_mainnet'>
        <img className='mainnet_img' src={ethereum} />
        <span>Ethereum</span>
        <BiChevronDown />
      </div>
      {/* <div className='connect_wallet' onClick={() => authenticate()}>
        {isAuthenticated ? user.get : 'Connect Wallet'}
      </div> */}
      <div className='connect_wallet'>Ethereum</div>
      <div className='navbar_settings'>...</div>
    </div>
  );
};

export default NavbarOptions;
