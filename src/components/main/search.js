import React from 'react';

const Search = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
      <input onChange={props.onChange} value={props.query}></input>
      <button></button>
    </form>
  )
}

export default Search;
