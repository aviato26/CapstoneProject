import React, { Component } from 'react';
import './App.css';
import TitlePage from './components/register/title.js';
import Signup from './components/register/signup.js';
import Login from './components/register/login.js';
import Home from './components/main/home.js';
import MovieList from './components/usermovies/movielist.js';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  getTitle = (e) => {
    let movieTitle = e.target.textContent
    this.setState({
      title: movieTitle
    })
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={() => <TitlePage />}/>
          <Route exact path='/home' component={() => <Home title={this.state.title}/>} />
          <Route exact path='/mylist' component={() => <MovieList getTitle={this.getTitle} />} />
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
