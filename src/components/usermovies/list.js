import React from 'react';
import './userStyles.css'

const List = (props) => {
  return(
    <div className='list'>
      <ul style={{padding: 0}}>
      {
        props.movies.map((c,i) => <div key={i}><li onClick={props.getListItem} onClick={props.toggle} className='inlineMovieList'>{c}</li><button onClick={(e) => props.removeMovie(e, i)} className='subButton'>Remove</button></div>)
      }
      </ul>
    </div>
  )
}

export default List;
