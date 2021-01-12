import React from "react";

const Login = () => {
  return (
    <form>
      <input type="text" placeholder="Email" name="email"></input>
      <input type="password" placeholder="Password" name="password"></input>
      <input type="submit"></input>
    </form>
  )
}

export default Login;