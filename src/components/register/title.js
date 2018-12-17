import React, { Component } from 'react';
import Signup from './signup.js';
import Login from './login.js';
import { Switch, Route, Link } from 'react-router-dom';

const TitlePage = () => {
  return(
    <div>
      <h1>Movie Bin</h1>
      <Link to='/Signup'><button>Sign Up</button></Link>
      <Link to='/Login'><button>Log In</button></Link>
    </div>
  )
}

export default TitlePage;
