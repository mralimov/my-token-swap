import React, { useState } from 'react';

const NavbarMenu = () => {
  const [menuClass, setMenuClass] = useState('swap');

  return (
    <div className='navbar_menu'>
      <div
        className={`navbar_menu_list ${
          menuClass == 'swap' ? 'active_list' : ''
        }`}
        onClick={() => setMenuClass('swap')}
      >
        Swap
      </div>
      <div
        className={`navbar_menu_list ${
          menuClass == 'pool' ? 'active_list' : ''
        }`}
        onClick={() => setMenuClass('pool')}
      >
        Pool
      </div>
      <div
        className={`navbar_menu_list ${
          menuClass == 'vote' ? 'active_list' : ''
        }`}
        onClick={() => setMenuClass('vote')}
      >
        Vote
      </div>
      <div
        className={`navbar_menu_list ${
          menuClass == 'charts' ? 'active_list' : ''
        }`}
        onClick={() => setMenuClass('charts')}
      >
        Charts
        <sup>↗</sup>
      </div>
    </div>
  );
};

export default NavbarMenu;
