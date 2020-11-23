import React from 'react';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) =>  {
  return (
    <nav className='navbar'>
      <div className="container flex-container">
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
          <li>
          <Link to='/'>Initial Fraud</Link>
          </li>
          <li>
            <Link to='/number'>Numbers</Link>
          </li>
          <li>
            <Link to='/numSequences'>Num Seq</Link>
          </li>
          <li>
            <Link to='/passwordGen'>Pass Gen</Link>
          </li>
        </ul>
      </div>
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
