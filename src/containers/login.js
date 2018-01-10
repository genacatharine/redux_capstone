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
import {connect} from 'react-redux';
import {loginUser} from '../actions'

class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let email = document.getElementById('email-input').value
    let password = document.getElementById('password-input').value
    console.log(email, password)
    let credentials = {
      email,
      password
    }
    console.log(credentials)
    this.props.loginUser(credentials);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
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
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ loginSuccess }, dispatch)
// }
// export default connect(null, mapDispatchToProps)(Login)
const mapStateToProps = (state, {messageId}) => {

  return {}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
