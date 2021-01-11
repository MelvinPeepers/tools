import React, { Fragment } from 'react';
import './Numbers.css';

const Numbers = () => {
  return (
    <Fragment>
      <div className="header-secondary">
        <h2>Strip and format numbers to 11 digits</h2>
        <div class="container-form">
          <form>
            <ul>
              <li>
                <label class='label' for="text-input">Input Number: </label>
                <input class="input"
                  type="text" id="text-input"
                />
                <button class="form-input form-btn">Submit</button>
              </li>
              <li>
                <label class='label' for="text-input">Output Number: </label>
                <textarea class="output"
                  type="text" id="text-input">
                </textarea>
                <button class="form-output form-btn">Copy</button>
              </li>
            </ul>
          </form>  
        </div>
      </div>
      
    </Fragment>
  )
}

export default Numbers