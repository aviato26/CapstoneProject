
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return(
    <div>
      <form>
        <h1>Movie Bin</h1>
        <h2>Sign Up</h2>
        <input placeholder='username'></input>
        <input placeholder='email'></input>
        <input placeholder='password'></input>
        <input placeholder='verify password'></input>
        <button></button>
      </form>
      <Link to='/Login'><button>Log In</button></Link>
    </div>
  )
}

export default Signup
