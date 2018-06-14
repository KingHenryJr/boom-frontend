import React, { Component } from 'react';
import introBG from '../assets/img/introBG.jpg'
import login from '../assets/img/login.png'
import signup from '../assets/img/signup.png'


export default class Home extends Component {

  signUp = () => {
    this.props.history.push("/signup");
  }

  login = () => {
    this.props.history.push("/login");
  }

  render() {

    return (
      <div className = "homeBGColor" >
        <div className = "homeStyle" >
          <h1 className = "homeLogin" onClick = {this.login} />
          <br/>
          <h1 className = "homeSignup" onClick = {this.signUp} />
        </div>
     </div>
    )
  }
}
