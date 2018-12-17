import React, { Component } from 'react';
import './App.css';
import TitlePage from './components/register/title.js';
import Signup from './components/register/signup.js';
import Login from './components/register/login.js';
import Home from './components/main/home.js';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/Signup' component={Signup} />
          <Route path='/Login' component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
