import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import {Container, Col, Row} from 'reactstrap';
//import './register.css';
import axios from 'axios';

const Login = (props) => {
  let email = null;
  let password = null;
  let userFound = false;

  const submit = (e) => {
    e.preventDefault();
    axios.post('/login', {
      email: email.value,
      password: password.value
    })
    .then(res => {
      if(res.data !== ''){
        sessionStorage.auth = 'good to go';
        props.history.replace('/home')
      }
    })
    .catch(err => {
      document.querySelector('h3').style.display = 'block'
    })
    e.target.reset();
  }

  return(
    <Container fluid className='register-container'>
        <form onSubmit={submit}>
        <Row>
          <h1>Movie Bin</h1>
        </Row>
        <Row>
          <h2>Log In</h2>
        </Row>
        <Row>
          <Col lg='7'>
            <input placeholder='email' ref={(data) => {email = data}} required></input>
            <input placeholder='password' ref={(data) => {password = data}} required></input>
            <button className='subButton'>Submit</button>
          </Col>
        </Row>
        </form>
        <Row>
          <Col>
            <Link to='/signup'><button className='button unfold'>Sign Up</button></Link>
            <h3>User was not found</h3>
          </Col>
        </Row>
    </Container>
  )
}

export default Login;
