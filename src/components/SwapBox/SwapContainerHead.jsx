import React from 'react';
import { BiCog } from 'react-icons/bi';

const SwapContainerHead = () => {
  return (
    <div className='swap_container_head'>
      <div className='swap_container_head--wrap'>
        <div className='swap_container_head_title'>Swap</div>

        <button className='swap_settings_button'>
          <BiCog />
        </button>
        {/* <div className='swap_settings'></div> */}
      </div>
    </div>
  );
};

export default SwapContainerHead;
