import React from 'react';

const List = (props) => {
  return(
    <div>
      <ul>
      {
        props.movies.map((c,i) => <div key={i}><li onClick={props.getListItem} onClick={props.getTitle}>{c}</li><button onClick={(e) => props.removeMovie(e, i)}>Remove</button></div>)
      }
      </ul>
    </div>
  )
}

export default List;
