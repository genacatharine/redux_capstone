import React, {Component} from 'react'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import './header.css'
import {connect} from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
  }

render() {
  // console.log(this.props.auth);
  return (
    <div className="navbar-container">
      <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"></link>
      <Navbar fluid collapseOnSelect>
        <Navbar.Brand>
          <a href="/" className="home">My Hiking Journal</a>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/register">{this.props.auth
                ? ''
                : 'Register'}</NavItem>
            <NavItem href="/tohikelist">{this.props.auth
                ? 'My Hike List'
                : ''}</NavItem>
            <NavItem href="/login">{this.props.auth
                ? 'Log Out'
                : 'Log In'}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

}

function mapStateToProps(state) {
  return {auth: state.auth}
}

export default connect(mapStateToProps, null)(Header)
