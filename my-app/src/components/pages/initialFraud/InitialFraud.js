//import React, { Fragment, useState } from 'react';
//import './InitialFraud.css';

//const InitialFraud = () => {

//  const [inputValue, setInputValue] = useState("");

//  const reset = () => {
//    setInputValue("");
//  }

//  const handleCopy = () => {
//    console.log('Click')
//    const copyText = document.getElementById('text-input')
//    copyText.select()
//    copyText.setSelectionRange(0, 9999)
//    document.execCommand('copy')
//    alert(`Input Number copied: ${copyText.value} `)
//  }

//  return (
//    <Fragment>
//      <div className="header-secondary">
//        <h2>Initial Fraud</h2>

//        <div className='container-fraud-form'>
//          <div className='container-fraud-input'>
//            <ul>
//                <li className="fraud-list">
//                  <label className='label'>IP: </label>
//                  <input 
//                    className='input-fraud'
//                    name='ipaddress'
//                    value='ipaddress'
//                    type='text' 
//                    id='text-input'
//                  />
//                </li>
//                <li className="fraud-list">
//                  <label className='label'>Additional IP: </label>
//                  <input 
//                    className='input-fraud'
//                    name='additional-ip'
//                    value='additional-ip'
//                    type='text' 
//                    id='text-input'
//                  />
//                </li>
//                <li className="fraud-list">
//                  <label className='label'>Address: </label>
//                  <input 
//                    className='input-fraud'
//                    name='address'
//                    value='address'
//                    type='text' 
//                    id='text-input'
//                  />
//                </li>
//                <li className="fraud-list">
//                  <label className='label'>Email: </label>
//                  <input 
//                    className='input-fraud'
//                    name='email'
//                    value='email'
//                    type='text' 
//                    id='text-input'
//                  />
//                </li>
//                <li className="fraud-list">
//                  <label className='label'>Subscription referrer: </label>
//                  <input 
//                    className='input-fraud'
//                    name='referrer'
//                    value='referrer'
//                    type='text' 
//                    id='text-input'
//                  />
//                </li>
//                <li className="fraud-list">
//                  <label className='label'>Associations: </label>
//                  <input 
//                    className='input-fraud'
//                    name='associations'
//                    value='associations'
//                    type='text' 
//                    id='text-input'
//                  />
//                </li>
//                <div className='button-settings'>
//                  <button className='input-btn fraud-btn' id='resetInput' onClick={reset}>Reset</button>
//                  <button className='output-btn fraud-btn' onClick={handleCopy}>Copy</button>
//                </div>
//              </ul>
//            </div> 
//        </div>
//      </div>

//    </Fragment>
//  )
//}

//export default InitialFraud