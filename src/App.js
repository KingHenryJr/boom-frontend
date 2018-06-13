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
    const levelOneEmoji = "😀😀😀😀😀"
    const levelOneInstructions = "Press the First Button Twice then the Third Button Once."
    const levelOneTimer = 1000000
    const levelTwoSolution = [2,3,1,5,6]
    const levelTwoEmoji = "😍😍😍😍😍"
    const levelTwoInstructions = "Press the Second Button then the Third then the First then the Fifth then the Sixth."
    const levelTwoTimer = 15
    const levelThreeSolution = [1,3,1,1,2,3,4]
    const levelThreeEmoji = "👍👍👍👍👍"
    const levelThreeInstructions = "Press the First Button then the Third then the First twice then the Second then the Third then the Fourth."
    const levelThreeTimer = 20

    return (
      <Provider store = {store}>
        <Switch>
          <div>
            <Route exact path = "/" component = { Home } />
            <Route exact path = "/login" component = { LoginForm }/>
            <Route exact path = "/signup" component = { SignupForm } />
            <Route exact path = "/player" component = { PlayerInfo } />
            <Route exact path = "/level1" render = { () => <ButtonBomb solution = {levelOneSolution} level = {1} emoji = {levelOneEmoji} instructions = { levelOneInstructions } timeLeft = { levelOneTimer } /> } />
            <Route exact path = "/level2" render = { () => <ButtonBomb solution = {levelTwoSolution} level = {2} emoji = {levelTwoEmoji} instructions = { levelTwoInstructions } timeLeft = { levelTwoTimer } /> } />
            <Route exact path = "/level3" render = { () => <ButtonBomb solution = {levelThreeSolution} level = {3} emoji = {levelThreeEmoji} instructions = { levelThreeInstructions } timeLeft = { levelThreeTimer } /> } />
            <Route exact path = "/youlose" render = { () => <YouLose /> } />
        </div>
      </Switch>
      </Provider>
    );
  }

}

export default App;
