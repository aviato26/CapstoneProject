import React, { Component } from 'react';
import './App.css';
import TitlePage from './components/register/title.js';
import Signup from './components/register/signup.js';
import Login from './components/register/login.js';
import Home from './components/main/home.js';
import MovieList from './components/usermovies/movielist.js';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={() => <TitlePage />}/>
          <Route exact path='/home' component={() => <Home />} />
          <Route exact path='/mylist' component={() => <MovieList />} />
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
