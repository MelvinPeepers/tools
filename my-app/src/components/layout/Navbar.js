import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>  {
  return (
    <nav className='navbar bg-primary'>
        <h1>
          
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/numbers'>Numbers</Link>
          </li>
          <li>
            <Link to='/numSequences'>Num Sequences</Link>
          </li>
          <li>
            <Link to='/initialFraud'>Initial Fraud</Link>
          </li>
          <li>
            <Link to='/passwordGen'>Password Gen</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
