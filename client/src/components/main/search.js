import React from 'react';
import './home.css';

const Search = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
      <input onChange={props.onChange} value={props.query} className='listbutton'></input>
      <button className='subButton'>Submit</button>
    </form>
  )
}

export default Search;
