import React, { Component } from 'react'
import { Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'

class Register extends Component {
  render(){
    return(
      <Form horizontal>
  		<FormGroup controlId="formHorizontalEmail">
  			<Col componentClass={ControlLabel} sm={2}>
  				Email
  			</Col>
  			<Col sm={10}>
  				<FormControl type="email" placeholder="Email" />
  			</Col>
  		</FormGroup>

  		<FormGroup controlId="formHorizontalPassword">
  			<Col componentClass={ControlLabel} sm={2}>
  				Password
  			</Col>
  			<Col sm={10}>
  				<FormControl type="password" placeholder="Password" />
  			</Col>
  		</FormGroup>

  		<FormGroup>
  			<Col smOffset={2} sm={10}>
  				<Button type="submit">Register</Button>
  			</Col>
  		</FormGroup>
  	</Form>
    )
  }
}

export default Register
