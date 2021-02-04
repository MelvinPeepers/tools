import React, { Fragment, useState } from "react";
import './Login.css';

const Login = () => {
  const [name, setName] = useState('');

  return (
    <Fragment>
      <div className="header-secondary">
        <h2>Login to My Tools</h2>
      </div>
      <div className="container-form">
        <form>
          <ul className="form-list">
            <li className="form-input">
              <label className="login-label">Username: </label>
              <input className="login-input" type="text" name="email"></input>
            </li>
            <li className="form-input">
              <label className="login-label">Password: </label>
              <input className="login-input" type="text"></input>
            </li>
            <button type="submit" className="login-btn">Login</button>
          </ul>
        </form>
      </div>
    </Fragment>
  )
}

export default Login;