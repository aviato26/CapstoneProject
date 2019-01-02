import React from 'react';
import './home.css';


const ListButton = (props) => {
  return(
    <div>
      <button onClick={props.onClick} className='subButton'>Add to My Movies</button>
    </div>
  )
}

export default ListButton;
