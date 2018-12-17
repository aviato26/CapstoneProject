import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return(
    <div>
      <form>
        <h1>Movie Bin</h1>
        <h2>Log In</h2>
        <input placeholder='email'></input>
        <input placeholder='password'></input>
        <button></button>
      </form>
      <Link to='/Signup'><button>Sign Up</button></Link>
    </div>
  )
}

export default Login;
