import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return(
    <div>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/mylist'>My Movies</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;
