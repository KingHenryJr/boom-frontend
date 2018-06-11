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
      <div>
        <form onSubmit = {this.handleSubmit}>
          <h1>Signup</h1>
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

          <input type="submit" />

        </form>
         <br/>

          <button onClick = {this.login}> Login </button>
      </div>

    )
  }
}

export default connect(null, { register })(SignupForm);
