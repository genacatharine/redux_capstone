import React, {Component} from 'react'
import {
  Form, FormGroup,Col, FormControl, Button, ControlLabel} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import loginSuccess from '../actions/index'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
        credentials: {email: '', password: ''}
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event){
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
                  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
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
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.credentials.email}
                onChange={this.onInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.onInputChange}
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
  export default Login
