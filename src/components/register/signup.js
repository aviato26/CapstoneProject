
import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
//import './register.css';
import axios from 'axios';

const Signup = (props) => {
  let user = null;
  let email = null;
  let password = null;
  let validatePassword = null;

  const SignUpData = (e) => {
    e.preventDefault();
    axios.post('/signup', {
      user: user.value,
      email: email.value,
      password: password.value,
      validatePassword: validatePassword.value
    })
    .then(res => {
      if(res.data === 'new user created'){
        props.history.replace('/home')
      } else {
        console.log('this form seems to be filled out incorrectly')
      }
    })
    e.target.reset();
  }

  return(
    <Container>
      <form onSubmit={SignUpData}>
      <Row>
        <Col>
          <h1>Movie Bin</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Sign Up</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <input placeholder='username' ref={(text) => {user = text}} required></input>
          <input placeholder='email' ref={(text) => {email = text}} required></input>
          <input placeholder='password' ref={(text) => {password = text}} required></input>
          <input placeholder='verify password' ref={(text) => {validatePassword = text}} required></input>
          <button className='subButton'>Submit</button>
        </Col>
      </Row>
      </form>
      <Row>
        <Col>
          <Link to='/login'><button className='button unfold'>Log In</button></Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup
