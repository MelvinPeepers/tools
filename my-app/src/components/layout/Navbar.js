import React from 'react';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) =>  {
  return (
    <nav className='navbar header-bg-primary'>
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
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

Navbar.defaultProps= {
  title: "CC Tools",
  icon: 'fas fa-tools'
}

Navbar.propTypes= {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
