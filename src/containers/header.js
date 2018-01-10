import React, {Component} from 'react'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" class="home">My Hiking Journal</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
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
