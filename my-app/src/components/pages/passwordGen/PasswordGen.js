import React, { Fragment } from 'react';
import './PasswordGen.css';

const PasswordGen = () => {
  return (
    <Fragment>
      <div className='header-secondary'>
        <h2>Password Generator</h2>
        <div className='container-form'>
          <div className='password-form'>
            <label htmlFor='password-length'>Password Length</label>
            <input type='number' id='password-length' name='password-length' min='6' max='15'  />
          </div>
          <div className='password-txt'>
            <p>Password can be between 6 to 15 characters in length.</p>
            <p>Must contain at least two groups of characters. Either letters and numbers or capitalized letters and lowercase letters</p>
            <p>No sequences, and no special characters/symbols.</p>
          </div>
          <button className='generator-btn'>Generate</button>
          <button className='copy-btn'>Copy</button>
        </div>
      </div>
    </Fragment>
  )
}

export default PasswordGen