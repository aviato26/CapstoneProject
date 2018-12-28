import React from 'react';

const MovieDetails = (props) => {
  return(
    <div>
      <ul>
      {
        props.details.map((c,i) => {
          return <li key={i}>{`${c[0]}: ${c[1]}`}</li>
        })
      }
      </ul>
    </div>
  )
}

export default MovieDetails;
