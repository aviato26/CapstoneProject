
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
      password: password.value
    })
    .then(res => {
      if(res.data === 'new user created'){
        sessionStorage.auth = 'good to go';
        props.history.replace('/home')
      } else {
          document.querySelector('h3').style.display = 'block'
      }
    })
    .catch(err => console.log(err))
    e.target.reset();
  }

  return(
    <Container fluid className='register-container'>
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
          <button className='subButton'>Submit</button>
        </Col>
      </Row>
      </form>
      <Row>
        <Col>
          <Link to='/login'><button className='button unfold'>Log In</button></Link>
          <h3>Please make sure all inputs are filled out <br></br>email does not need to be valid but must be in a valid email format ***@***.com</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup
