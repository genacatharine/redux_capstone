import React, {Component} from 'react'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import './header.css'
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      authorized: false
    }
  }
  componentWillMount(){
    const cookies = new Cookies();
    console.log('DACOOKIE')
    const myCookie = Boolean(cookies.get('mhj-jwt'));
    console.log('cookie', myCookie)
    if(myCookie){
      this.setState({
        authorized:true
      })
    }else{
      this.setState({authorized:false})
    }
  }
  render() {
    return (
      <div className="navbar-container">
        <link href="https://fonts.googleapis.com/css?family=Antic+Slab|Quicksand|Rock+Salt|Spinnaker" rel="stylesheet"></link>
        <Navbar fluid collapseOnSelect>
          {/* <Navbar.Header> */}
            <Navbar.Brand>
              <a href="/" className="home">My Hiking Journal</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          {/* </Navbar.Header> */}
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="/register">{this.state.authorized ? '' : 'Register'}</NavItem>
              <NavItem href="/tohikelist">{this.state.authorized ? 'My To-Hike List' : ''}</NavItem>
              <NavItem href="/login">{this.state
                .authorized ? 'Log Out' : 'Log In'}</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Header
