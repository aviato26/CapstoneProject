import React, { Component } from 'react';
import './App.css';
import TitlePage from './components/register/title.js';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={TitlePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
