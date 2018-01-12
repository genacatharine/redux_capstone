import React, {Component} from 'react'
import {
  Form,
  FormGroup,
  Col,
  Button,
  ControlLabel
} from 'react-bootstrap'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {registerUser} from '../actions'
import Header from './header'
import './register.css'

class Register extends Component {

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
    this.props.registerUser(credentials);
  }

  render() {
    return (
      <div className="registercontainer">
        <Header />
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
        <label>Email</label>
              <input id="email-input" name="email" type="email" placeholder="Email"/>
<br />
<label>
              Password</label>

              <input id="password-input" name="password" type="password" placeholder="Password"/>

              <Button type="submit">Register</Button>

        </form>
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
  registerUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register);
