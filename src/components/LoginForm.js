import React, { Component } from 'react';
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

      <div className = "loginBG" >
        <h1 className = "loginText" > Login </h1>

        <form className = "loginForm" onSubmit = {this.handleSubmit}>
          <div>
            <input
              type = "text"
              name = "username"
              placeholder = "Username"
              onChange = {this.handleChange}
              value = {this.state.username}
            />
          </div>

          <div>
              <input
                type = "password"
                name = "password"
                placeholder = "Password"
                onChange = {this.handleChange}
                value = {this.state.password}
              />
          </div>

          <input type="submit" />
          <br/>
          <button className = "signupButton" onClick = {this.signUp}> Signup </button>

        </form>
      </div>

    )
  }

}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginForm);
