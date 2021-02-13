import React, { Fragment, useState } from 'react';
import './PasswordGen.css';
import { numbers, upperCaseLetters, lowerCaseLetters } from './characters'

const PasswordGen = () => {
  const [ password, setPassword ] = useState('')
  const [ passwordLength, setPasswordLength ] = useState(15)

  const handleGeneratePassword = (event) => {
    let characterList = numbers + upperCaseLetters + lowerCaseLetters

    setPassword(createPassword(characterList))
  }

  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for(let i=0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  const reset = () => {
    setPassword('');
  }

  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
  }

  const handleCopyPassword = (event) => {
    copyToClipboard()
  }

  return (
    <Fragment>
      <div className='header-secondary'>
        <h2>Password Generator</h2>
        <div className='container-form'>
          <div className='password-form'>
            <label className='password-label' htmlFor='password-length'>Password Length</label>
            <input
              defaultValue={passwordLength}
              // onChange is keeping track everything the password length is changed
              onChange={(event) => setPasswordLength(event.target.value)}
              type='number' 
              id='password-length' 
              name='password-length' 
              min='6' 
              max='15'
            />
          </div>
          <div className="password-copy">
          <h3 className='password-field'>{password}</h3>
          <button onClick={handleCopyPassword} className='copy-btn password-btn'>Copy</button>
          </div>
          
          <div className='password-txt'>
            <p>Password can be between 6 to 15 characters in length.</p>
            <p>Must contain at least two groups of characters. Either letters and numbers or capitalized letters and lowercase letters</p>
            <p>No sequences, and no special characters/symbols.</p>
          </div>
          <div className='btn-group'>
          <button onClick={handleGeneratePassword} className='generator-btn password-btn'>Generate</button>
          <button className='password-btn' id='resetInput' onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PasswordGen