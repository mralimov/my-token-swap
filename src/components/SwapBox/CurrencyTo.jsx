import React, { useState } from 'react';
import usdt from '../../images/usdt.png';
import { BiChevronDown } from 'react-icons/bi';

const CurrencyTo = () => {
  const [inputCurrencyTo, setInputCurrencyTo] = useState('');

  console.log(inputCurrencyTo);
  return (
    <div className='swap_currency_to'>
      <div className='swap_currency_to--wrap'>
        <input
          type='text'
          value={inputCurrencyTo}
          inputMode='decimal'
          autoComplete='off'
          autoCorrect='off'
          pattern='^[0-9]*[.,]?[0-9]*$'
          placeholder='0.0'
          minLength='1'
          maxLength='79'
          spellCheck='false'
          onChange={(e) => setInputCurrencyTo(e.target.value)}
        />
        {/* <div className='swap_currency currency_to'> */}
        <button className='swap_currency_from_to'>
          <img className='swap_currency_usdt' src={usdt}></img>
          <span>USDT</span>
          <BiChevronDown />
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CurrencyTo;
