import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import './home.css';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = (e) => {
      this.setState({
        collapsed: !this.state.collapsed
      });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light style={{padding: 0}}>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem className='navItem'>
                <Link to='/home' className='tweetTextStyle'>Home</Link>
              </NavItem>
              <NavItem className='navItem'>
                <Link to='/mylist' className='tweetTextStyle'>My Movies</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
