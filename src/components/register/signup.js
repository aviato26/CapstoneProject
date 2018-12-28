
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = (props) => {
  let user = null;
  let email = null;
  let password = null;
  let validatePassword = null;

  const SignUpData = (e) => {
    e.preventDefault();
    axios.post('/signup', {
      user: user.value,
      email: email.value,
      password: password.value,
      validatePassword: validatePassword.value
    })
    .then(res => {
      if(res.data === "created new user"){
        props.history.replace('/home')
      }
    })
    e.target.reset();
  }

  return(
    <div>
      <form onSubmit={SignUpData}>
        <h1>Movie Bin</h1>
        <h2>Sign Up</h2>
        <input placeholder='username' ref={(text) => {user = text}} required></input>
        <input placeholder='email' ref={(text) => {email = text}} required></input>
        <input placeholder='password' ref={(text) => {password = text}} required></input>
        <input placeholder='verify password' ref={(text) => {validatePassword = text}} required></input>
        <button></button>
      </form>
      <Link to='/login'><button>Log In</button></Link>
    </div>
  )
}

export default Signup
