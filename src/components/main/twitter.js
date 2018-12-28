import React from 'react';

const Twitter = (props) => {
  return(
    <div>
      <ul>
      {
        props.tweets.map((c,i) => {
          return <li key={i}>{c.text}</li>
        })
      }
      </ul>
    </div>
  )
}

export default Twitter;
