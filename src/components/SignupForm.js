import React, { Component } from 'react';
import { register } from '../actions/playerActions'
import { connect } from 'react-redux';

export class SignupForm extends Component {

  state = {
    username: "",
    password: "",
    email: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state.username, this.state.password, this.state.email, this.props.history.push)
  }

  login = () => {
    localStorage.clear();
    this.props.history.push("/login");
  }

  render(){
    return (
      <div className = "signupBG" >
        <div className= "bluePlanet">
          <h1 className = "signUpText" > Signup </h1>

        <form onSubmit = {this.handleSubmit}>
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

          <div>
              <input
                type = "text"
                name = "email"
                placeholder = "Email Address"
                onChange = {this.handleChange}
                value = {this.state.email}
              />
          </div>

          <button className = "loginButton" onClick = {this.login}> Login </button>
          <br/>
          <input type="submit" />

        </form>
         <br/>
        </div>
    </div>

    )
  }
}

export default connect(null, { register })(SignupForm);
