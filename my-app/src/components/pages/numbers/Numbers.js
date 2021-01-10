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
                <label>Input Number: </label>
                <input
                  type="text"
                />
                <button>Submit</button>
              </li>
              <li>
                <label>Output Number: </label>
                <input
                  type="text"
                />
                <button>Copy</button>
              </li>
            </ul>
          </form>  
        </div>
      </div>
      
    </Fragment>
  )
}

export default Numbers