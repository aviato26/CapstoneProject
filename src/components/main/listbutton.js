import React from 'react';


const ListButton = (props) => {
  return(
    <div>
      <button onClick={props.onClick}>Add to My Movies</button>
    </div>
  )
}

export default ListButton;
