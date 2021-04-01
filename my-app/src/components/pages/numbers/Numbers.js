import React, { Fragment, useState } from 'react';
import './Numbers.css';

const Numbers = () => {

  const [inputValue, setInputValue] = useState("");

  const changeInput = (evt) => {
    const { value } = evt.target;
    setInputValue(value);
  }

  const reset = () => {
    setInputValue("");
  }

  const handleCopy = () => {
    console.log('Click')
    const copyText = document.getElementById('text-input')
    copyText.select()
    copyText.setSelectionRange(0, 9999)
    document.execCommand('copy')
    alert(`Input Number copied: ${copyText.value} `)
  }




  return (
    <Fragment>
      <div className='header-secondary'>
        <h2>Strip and format numbers to 11 digits</h2>
        
        <div className='container-numbers'>
            <ul>
              <li className="list-output">
                <div className='label'>Original Number: </div>
                <div className='label' id="text-output"> {inputValue} </div>
              </li>
              <li className="list-input">
                <label className='label'>Formatted: </label>
                <input 
                  className='input'
                  name='number'
                  type='text' 
                  id='text-input'
                  value={inputValue.replace(/[^\d]/g, "")}
                  onChange={changeInput}
                />
              </li>
              <div className='btn-numbers'>
                <button className='input-btn numbers-btn' id='resetInput' onClick={reset}>Reset</button>
                <button className='output-btn numbers-btn' onClick={handleCopy}>Copy</button>
              </div>
            </ul>
        </div>
      </div>
      
    </Fragment>
  )
}

export default Numbers