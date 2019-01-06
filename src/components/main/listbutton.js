import React from 'react';
import './home.css';


const ListButton = (props) => {
  return(
    <div>
      <button onClick={props.onClick} className='subButton'>Add to My Movies</button>
      <p className='warning'>please enter movie title</p>
    </div>
  )
}

export default ListButton;
