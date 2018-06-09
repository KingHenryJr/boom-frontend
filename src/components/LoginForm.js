import React, { Component } from 'react';
import '../assets/css/LoginForm.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/playerActions'

export class LoginForm extends Component {

  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password, this.props.history.push)
  }

  signUp = () => {
    localStorage.clear();
    this.props.history.push("/signup");
  }

  render(){

    return (

      <div>
        <h1> Login </h1>

        <form onSubmit = {this.handleSubmit}>

          <div>
            <input
              type = "text"
              name = "username"
              placeholder = "Username"
              onChange = {this.handleChange}
              value = {this.state.username}
            />
            <label htmlFor="username">Username</label>
          </div>

          <div>
              <input
                type = "password"
                name = "password"
                placeholder = "Password"
                onChange = {this.handleChange}
                value = {this.state.password}
              />
            <label htmlFor="password">Password</label>
          </div>

          <input type="submit" />

        </form>
          <br/>
          <button onClick = {this.signUp}> Signup </button>
      </div>

    )
  }

}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginForm);
