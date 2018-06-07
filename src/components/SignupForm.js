import React, { Component } from 'react';
import '../assets/css/SignupForm.css'

export default class SignupForm extends Component {

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
  }

  render(){
    return (

      <div>
        <form onSubmit = {this.handleSubmit}>

          <label>Sign Up</label>

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

          <div>
              <input
                type = "text"
                name = "email"
                placeholder = "Email Address"
                onChange = {this.handleChange}
                value = {this.state.email}
              />
            <label htmlFor="email">Email</label>
          </div>

        </form>
      </div>

    )
  }
}
