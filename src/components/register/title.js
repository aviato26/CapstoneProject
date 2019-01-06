import React, { Component } from 'react';
import Signup from './signup.js';
import Login from './login.js';
import {Container, Col, Row} from 'reactstrap';
import './register.css';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

const TitlePage = () => {
  return(
    <Container fluid className='register-container'>
      <Row>
        <Col>
          <h1>Movie Bin</h1>
        </Col>
      </Row>
      <Row className='registerPage'>
        <Col sm='6 titleButtons'>
          <Link to='/Signup'><button className='button unfold registerButtons'>Sign Up</button></Link>
        </Col>
        <Col sm='6 titleButtons'>
          <Link to='/Login'><button className='button unfold registerButtons blah'>Log In</button></Link>
        </Col>
      </Row>
    </Container>
  )
}

export default TitlePage;
