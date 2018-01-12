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

  handleSubmit = async (event) => {
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
        <Header />
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <input id="email-input" name="email" type="email" placeholder="Email"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <input id="password-input" name="password" type="password" placeholder="Password"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
