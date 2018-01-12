import React, {Component} from 'react'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import './header.css'
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';

const Header = (props) => {
  console.log(props);
  return (
  <div className="navbar-container">
    <link href="https://fonts.googleapis.com/css?family=Antic+Slab|Quicksand|Rock+Salt|Spinnaker" rel="stylesheet"></link>
    <Navbar fluid collapseOnSelect>
        <Navbar.Brand>
          <a href="/" className="home">My Hiking Journal</a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href="/register">{props.auth ? '' : 'Register'}</NavItem>
          <NavItem href="/tohikelist">{props.auth ? 'My Hike List' : ''}</NavItem>
          <NavItem href="/login">{props.auth ? 'Log Out' : 'Log In'}</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, null)(Header)
