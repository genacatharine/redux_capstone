import React, {Component} from 'react'
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Button,
  ControlLabel
} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
// import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import {loginUser} from '../actions'
import Header from './header'
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);

    if (nextProps.auth) {
      this.props.history.push('/')
    }
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    let email = document.getElementById('email-input').value
    let password = document.getElementById('password-input').value
    let credentials = {
      email,
      password
    }
    this.props.loginUser(credentials);
  }

  render() {
    return (
      <div className="logincontainer">
        <Header/>
                <div className="innercontainer">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input id="email-input" name="email" type="email" placeholder="Email"/>
          <br/>
          <label>Password</label>
          <input id="password-input" name="password" type="password" placeholder="Password"/>

          <button type="submit">Sign in</button>

        </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({auth: state.auth})

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
