import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Navlink } from 'react-router-dom'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import PlayerInfo from './components/PlayerInfo'

class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/login" component = {LoginForm}/>
            <Route exact path = "/signup" component = { SignupForm } />
            <Route exact path = "/player" component = {PlayerInfo} />
        </div>
        </Router>
    );
  }

}

export default App;
