import React, { Component } from 'react';
import introBG from '../assets/img/introBG.jpg'
import login from '../assets/img/login.png'
import signup from '../assets/img/signup.png'

const homeStyle = {
 width: "100%",
 height: "700px",
 backgroundImage: `url(${introBG})` ,
 backgroundRepeat: 'no-repeat',
 backgroundPosition: 'center center ',
 backgroundColor: '#181743',
}

const loginStyle = {
  postion: "relative",
  width: "130px",
  height: "80px",
  marginTop: "200px",
  marginLeft: "200px",

}

const signupStyle = {
  postion: "relative",
  width: "170px",
  height: "80px",
  marginTop: "30px",
  marginLeft: "200px",
}

export default class Home extends Component {

  signUp = () => {
    this.props.history.push("/signup");
  }

  login = () => {
    this.props.history.push("/login");
  }

  render() {

    return (
      <div style={homeStyle}>
        <img className="login" onClick={this.login} src={login} style={loginStyle} />
        <br/>
        <img className="signup" onClick={this.signUp} src={signup} style={signupStyle} />
      </div>
    )
  }
}
