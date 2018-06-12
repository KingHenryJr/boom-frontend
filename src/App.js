import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Store'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import PlayerInfo from './components/PlayerInfo'
import ButtonBomb from './components/buttonBomb'
import YouLose from './components/loss'

class App extends Component {

  render() {

    //solution arrays
    const levelOneSolution = [1,1,3]
    const levelTwoSolution = [2,3,1]
    const levelThreeSolution = [1,3,1]

    return (
      <Provider store = {store}>
        <Switch>
          <div>
            <Route exact path = "/" component = { Home } />
            <Route exact path = "/login" component = { LoginForm }/>
            <Route exact path = "/signup" component = { SignupForm } />
            <Route exact path = "/player" component = { PlayerInfo } />
            <Route exact path = "/level1" render = { () => <ButtonBomb solution = {levelOneSolution} level = {1} history={this.props.history}/> } />
            <Route exact path = "/level2" render = { () => <ButtonBomb solution = {levelTwoSolution} level = {2} /> } />
            <Route exact path = "/level3" render = { () => <ButtonBomb solution = {levelThreeSolution} level = {3} /> } />
            <Route exact path = "/youlose" render = { () => <YouLose /> } />
        </div>
      </Switch>
      </Provider>
    );
  }

}

export default App;
