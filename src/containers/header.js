import React, { Component } from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home" class="home">My Hiking Journal</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {/* <Link to='/register'>Register</Link> */}
              {/* <Link to='/login'>Login</Link> */}
              <NavItem href="/register">Register</NavItem>
              <NavItem href="/login">Login</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Header
