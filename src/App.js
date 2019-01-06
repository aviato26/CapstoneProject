import React, { Component } from 'react';
import TitlePage from './components/register/title.js';
import Signup from './components/register/signup.js';
import Login from './components/register/login.js';
import Home from './components/main/home.js';
import MovieList from './components/usermovies/movielist.js';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className='app'>
          <Route exact path='/' component={() => <TitlePage />}/>
          <Route exact path='/home' render={() => {
            if(sessionStorage.auth === 'good to go'){
               return <Home className='app' />
             } else {
               return <Redirect to='/' />
             }
            }
          } />

          <Route exact path='/mylist' render={() => {
              if(sessionStorage.auth === 'good to go'){
               return <MovieList />
             } else {
               return <Redirect to='/' />
             }
          }} />
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
