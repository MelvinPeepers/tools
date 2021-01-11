import React, { Fragment } from 'react';
import './Numbers.css';

const Numbers = () => {
  return (
    <Fragment>
      <div className="header-secondary">
        <h2>Strip and format numbers to 11 digits</h2>
        <div className="container-form">
          <form>
            <ul className="form-list">
              <li className="list-input">
                <label className='label' for="text-input">Input Number: </label>
                <input className="input"
                  type="text" id="text-input"
                />
                <button className="form-input form-btn" type="submit">Submit</button>
              </li>
              <li className="list-output">
                <label className='label' for="text-input">Output Number: </label>
                <input className="output"
                  type="text" id="text-input">
                </input>
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