import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
//import './register.css';
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
    <div>
        <form onSubmit={submit}>
          <h1>Movie Bin</h1>
          <h2>Log In</h2>
          <input placeholder='email' ref={(data) => {email = data}} required></input>
          <input placeholder='password' ref={(data) => {password = data}} required></input>
          <button className='subButton'>Submit</button>
        </form>
        <Link to='/signup'><button className='button unfold'>Sign Up</button></Link>
    </div>
  )
}

export default Login;
