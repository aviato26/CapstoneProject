import React, { Component } from 'react';
import Signup from './signup.js';
import Login from './login.js';
//import './register.css';
import { Switch, Route, Link } from 'react-router-dom';

const TitlePage = () => {
  return(
    <div className='title'>
      <h1>Movie Bin</h1>
      <Link to='/Signup'><button className='button unfold'>Sign Up</button></Link>
      <Link to='/Login'><button className='button unfold'>Log In</button></Link>
    </div>
  )
}

export default TitlePage;
