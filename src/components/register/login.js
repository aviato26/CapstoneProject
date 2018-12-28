import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  let email = null;
  let password = null;
  let userFound = false;

  const submit = (e) => {
    e.preventDefault();
    axios.post('/login', {
      email: email.value,
      password: password.value
    })
    .then(res => {
      if(res.data !== ''){
        props.history.replace('/home')
      }
    })
    e.target.reset();
  }

  return(
    <BrowserRouter>
    <div>
        <form onSubmit={submit}>
          <h1>Movie Bin</h1>
          <h2>Log In</h2>
          <input placeholder='email' ref={(data) => {email = data}} required></input>
          <input placeholder='password' ref={(data) => {password = data}} required></input>
          <button></button>
        </form>
        <Link to='/signup'><button>Sign Up</button></Link>
    </div>
    </BrowserRouter>
  )
}

export default Login;
