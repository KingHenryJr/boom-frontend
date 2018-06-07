import React, { Component } from 'react';
import '../assets/css/LoginForm.css'


export default class LoginForm extends Component {

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
    this.props.onSubmit(this.state.username, this.state.password, this.props.history.push)
  }

  render(){
    const { submitLabel } = this.props;

    return (

      <div>
        <h1> {submitLabel} </h1>

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
      </div>

    )
  }

}
