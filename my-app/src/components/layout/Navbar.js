import React from 'react';
import PropTypes  from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ icon, title }) =>  {
  return (
    <nav className='navbar'>
      <div className="container flex-container">
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
          <li>
          <NavLink exact to='/fraud' className="main-nav" activeClassName="main-nav-active">Initial Fraud</NavLink>
          </li>
          <li>
            <NavLink exact to='/numbers' className="main-nav" activeClassName="main-nav-active">Numbers</NavLink>
          </li>
          <li>
            <NavLink exact to='/numSequences' className="main-nav" activeClassName="main-nav-active">Num Seq</NavLink>
          </li>
          <li>
            <NavLink exact to='/passwordGen' className="main-nav" activeClassName="main-nav-active">Pass Gen</NavLink>
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
