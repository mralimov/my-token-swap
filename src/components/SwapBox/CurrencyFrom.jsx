import React, { useState } from 'react';
import ethereum from '../../images/ethereum.png';
import { BiChevronDown } from 'react-icons/bi';

const CurrencyFrom = () => {
  const [inputCurrenyFrom, setInputCurrenyFrom] = useState('');

  console.log(inputCurrenyFrom);
  return (
    <div className='swap_currency_from'>
      <div className='swap_currency_from_wrap'>
        <input
          type='text'
          value={inputCurrenyFrom}
          inputMode='decimal'
          autoComplete='off'
          autoCorrect='off'
          pattern='^[0-9]*[.,]?[0-9]*$'
          placeholder='0.0'
          minLength='1'
          maxLength='79'
          spellCheck='false'
          onChange={(e) => setInputCurrenyFrom(e.target.value)}
        ></input>
        <button className='swap_currency_from_button'>
          <img className='swap_currency_ethereum' src={ethereum} />
          <span>ETH</span>
          <BiChevronDown />
        </button>
      </div>
    </div>
  );
};

export default CurrencyFrom;
