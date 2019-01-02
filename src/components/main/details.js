import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './home.css';

const MovieDetails = (props) => {
  return(
    <Col>
      <ul>
      {
        props.details.map((c,i) => {
          return <li key={i} className='tweetTextStyle'>{`${c[0]}: ${c[1]}`}</li>
        })
      }
      </ul>
    </Col>
  )
}

export default MovieDetails;
