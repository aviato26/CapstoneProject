import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import './register.css';
import { Link } from 'react-router-dom';

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
