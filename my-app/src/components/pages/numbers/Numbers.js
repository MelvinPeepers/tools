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

  return (
    <Fragment>
      <div className="header-secondary">
        <h2>Strip and format numbers to 11 digits</h2>
        <div className="container-form">
          <form>
            <ul className="form-list">
              <li className="list-input">
                <label className='label' for="text-input">Input Number: </label>
                <input 
                  className="input"
                  type="text" 
                  id="text-input"
                  value={inputValue}
                  onChange={changeInput}
                />
                <button className="form-input form-btn" type="submit">Submit</button>
                <button id="resetInput" onClick={reset}>Reset</button>
              </li>
              <li className="list-output">
                <div className='label'>Output Number: {inputValue}</div>
                
                <button className="form-output form-btn">Copy</button>
              </li>
            </ul>
          </form>  
        </div>
      </div>
      
    </Fragment>
  )
}

export default Numbers