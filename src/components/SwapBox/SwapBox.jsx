import React from 'react';
import { BiSortAlt2 } from 'react-icons/bi';

import ConnectWallet from './ConnectWallet.jsx';
import CurrencyFrom from './CurrencyFrom.jsx';
import CurrencyTo from './CurrencyTo.jsx';
import SwapContainerHead from './SwapContainerHead.jsx';

const SwapBox = () => {
  return (
    <div className='swap'>
      <div className='swap_container'>
        <SwapContainerHead />
        <CurrencyFrom />
        <div className='swap_currency_switch'>
          <BiSortAlt2 />
        </div>
        <CurrencyTo />
        <ConnectWallet />
      </div>
    </div>
  );
};

export default SwapBox;
