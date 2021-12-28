import React from 'react';
import { BiSortAlt2, BiCog, BiChevronDown } from 'react-icons/bi';

const SwapBox = () => {
  return (
    <div className='swap'>
      <div className='swap_container'>
        <div className='swap_container_head'>
          <div className='swap_container_head--wrap'>
            <div className='swap_container_head_title'>Swap</div>

            <button className='swap_settings_button'>
              <BiCog />
            </button>
            {/* <div className='swap_settings'></div> */}
          </div>
        </div>
        <div className='swap_currency_from'>
          <div className='swap_currency_from_wrap'>
            <input></input>
            <button>
              <img></img>
              <span></span>
              <BiChevronDown />
            </button>
          </div>
        </div>
        <div className='swap_currency_switch'>
          <BiSortAlt2 />
        </div>
        <div className='swap_currency_to'>
          <div>
            <input></input>
            <button>
              <button>
                <img></img>
                <span></span>
                <BiChevronDown />
              </button>
            </button>
          </div>
        </div>
        <div className='swap_connect_wallet'>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default SwapBox;
