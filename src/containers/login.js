import React, {Component} from 'react'
import {
  Form, FormGroup,Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  loginUser
} from '../actions'

class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.onInputChange = this.onInputChange.bind(this)
  }

  // onInputChange(event){
  //   const field = event.target.name;
  //   const credentials = this.state.credentials;
  //   credentials[field] = event.target.value;
    // return this.setState({credentials: credentials});



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
    // this.setState({credentials: credentials})
  }

    render() {
      return (
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <input
                id="email-input"
                name="email"
                type="email"
                placeholder="Email"
                // value={this.state.credentials.email}
                // onChange={this.onInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <input
                id="password-input"
                name="password"
                type="password"
                placeholder="Password"
                // value={this.state.credentials.password}
                // onChange={this.onInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>

      )
    }
  }
  // function mapDispatchToProps(dispatch){
  //   return bindActionCreators({ loginSuccess }, dispatch)
  // }
  // export default connect(null, mapDispatchToProps)(Login)
  const mapStateToProps = (state, { messageId }) => {

    return {

    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    loginUser
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
