import React, { Component } from 'react';

export default class Home extends Component {

  signUp = () => {
    this.props.history.push("/signup");
  }

  login = () => {
    this.props.history.push("/login");
  }

  render() {

    return (
      <div className = "homeBGColor background" >
        <div className = "homeStyle" >
          <h1 className = "homeLogin" onClick = {this.login} > </h1>
          <br/>
          <h1 className = "homeSignup" onClick = {this.signUp} > </h1>
        </div>
     </div>
    )
  }
}
