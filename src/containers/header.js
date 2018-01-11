import React, {Component} from 'react'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import './header.css'
import { Link, IndexLink } from 'react-router';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className="navbar-container">
        <link href="https://fonts.googleapis.com/css?family=Antic+Slab|Quicksand|Rock+Salt|Spinnaker" rel="stylesheet"></link>
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" className="home">My Hiking Journal</a>
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
