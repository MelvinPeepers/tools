import React, { Fragment } from "react";
import './Login.css';

const Login = () => {
  return (
    <Fragment>
      <div className="header-secondary">
        <h2>Login to CC Tools</h2>
      </div>
      <div className="container-form">
        <form>
        <ul className="form-list">
          <li className="list-input">
          <label className='label' for="text-input">Username: </label>
            <input className="input" type="text" name="email"></input>
          </li>
          <li className="list-input">
          <label className='label' for="text-input">Password: </label>
            <input className="input" type="password" name="password"></input>
          </li>
          <button className="login-btn">Login</button>
          </ul>
        </form>
      </div>
    </Fragment>
  )
}

export default Login;