import React, { Component } from 'react';
import Signup from './signup.js';
import Login from './login.js';
import { Switch, Route } from 'react-router-dom';

class TitlePage extends Component {
  constructor(props){
    super(props);
    this.state ={
      show: false
    }
  }
  render(){
    return(
      <div>
        <h1>Movie Bin</h1>
          <Switch>
            <Route path='/Signup'><button>Sign Up</button></Link>
            <Link to='Login'><button>Log In</button></Link>
          </Switch>
      </div>
    )
  }
}

export default TitlePage;
