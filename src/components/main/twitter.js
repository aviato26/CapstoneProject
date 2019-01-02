import React from 'react';
import {Col} from 'reactstrap';
import './home.css';

const Twitter = (props) => {
  return(
      <ul>
      {
        props.tweets.map((c,i) => {
          return <p className='tweetTextStyle'>tweet<li key={i}>{c.text}</li></p>
        })
      }
      </ul>
  )
}

export default Twitter;
