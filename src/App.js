import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import PlayerInfo from './components/PlayerInfo'

class App extends Component {

  login = (username, password, callback) => {

    fetch('http://localhost:3000/api/v1/sessions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({username, password})})
      .then(res => res.json())
      .then(json => {
        if (json.token) {

        localStorage.setItem('token', json.token)
        localStorage.setItem('user_id', json.user_id)
        localStorage.setItem('username', json.username)

        console.log(json)
        callback("/player");

      } else {
        callback("/login")
        alert("✋ Wrong Info ✋")
      }

      });

  }

  register = () => {

  }

  render() {
    return (

      <Router>
        <div>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/login" render = {(props) => <LoginForm submitLabel="Login" onSubmit={this.login} {...props} /> } />
          <Route exact path = "/signup" render = {(props) => <SignupForm submitLabel="Signup" onSubmit={this.register} {...props} /> } />
          <Route exact path = "/player" render = {(props) => <PlayerInfo {...props} /> } />
      </div>
      </Router>

    );
  }
}

export default App;
