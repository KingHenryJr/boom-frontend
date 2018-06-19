import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Store'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import PlayerInfo from './components/PlayerInfo'
import ButtonBomb from './components/buttonBomb'
import WireBomb from './components/wireBomb'
import YouLose from './components/loss'
import GameIntro from './components/GameIntro'

class App extends Component {

  render() {

    //solution arrays
    const levelOneSolution = [1,1,3,1,1,3]
    const levelOneEmoji = "👌👌👌👌👌"
    const levelOneInstructions = "Press the First Button Twice then the Third Button Once. Repeat"
    const levelOneTimer = 10000
    const levelTwoSolution = [1,3,5]
    const levelTwoEmoji = "😍😍😍😍😍"
    const levelTwoInstructions = "Cut wires Left to Right. Cut all odd wires."
    const levelTwoTimer = 10000
    const levelThreeSolution = [2,9,7,2]
    const levelThreeEmoji = "👍👍👍👍👍"
    const levelThreeInstructions = "Never press the Fifth Button. Press the Second Button. Then the Ninth. Then the Seventh. Then the Fifth. Then the Second."
    const levelThreeTimer = 10
    const levelFourSolution = [4]
    const levelFourEmoji = "😊😊😊😊😊"
    const levelFourInstructions = "Cut all wires next to Purple wires. Do Not Cut wires next to Blue wires."
    const levelFourTimer = 20
    const levelFiveSolution = [9,1,3,1,5]
    const levelFiveEmoji = "💯 💯 💯 💯 💯 "
    const levelFiveInstructions = "Press the Last Button. Then press the First Button. Then press the Third Button. Then press the Second Button Pressed. Then Press the Fifth."
    const levelFiveTimer = 15
    const levelSixSolution = [5,1]
    const levelSixEmoji = "🤩🤩🤩🤩🤩"
    const levelSixInstructions = "Don't Cut wires between 2 and 4. Cut wires Right to Left. Cut the first wire. Cut all wires next to Orange Wires. Cut all wires next to Red wires. "
    const levelSixTimer = 15
    const levelSevenSolution = [6,3]
    const levelSevenEmoji = "🙌🙌🙌🙌🙌"
    const levelSevenInstructions = "Even numbers are Silly Numbers. Press the Second Button. Don't press Silly Numbers Unless divisible by Three. Then the Fourth Button. Press the Sixth button. Then the Third."
    const levelSevenTimer = 20
    const levelEightSolution = [1,4]
    const levelEightEmoji = "🎉🎉🎉🎉🎉"
    const levelEightInstructions = "Never cut yellow wires. Cut all wires divisible by 2. Cut wires left to right. Cut yellow wire. Cut the first wire."
    const levelEightTimer = 20
    const levelNineSolution = [2,4,6,]
    const levelNineEmoji = "🙏🙏🙏🙏🙏"
    const levelNineInstructions = "Press All Buttons. Don't press buttons that have the Letter E. Press buttons from small to large."
    const levelNineTimer = 25
    const levelTenSolution = [3,1,5]
    const levelTenEmoji = "🔥🔥🔥🔥🔥"
    const levelTenInstructions = "Cut All wires next to Red wires. Cut All wires next to Yellow Wires. Prioritize cutting Purple Wires. Cut wires from Left to Right."
    const levelTenTimer = 25


    return (
      <Provider store = {store}>
        <Switch>
          <div>
            <Route exact path = "/" component = { Home } />
            <Route exact path = "/login" component = { LoginForm }/>
            <Route exact path = "/signup" component = { SignupForm } />
            <Route exact path = "/player" component = { PlayerInfo } />
            <Route exact path = "/intro" component = { GameIntro } />
            <Route exact path = "/level1" render = { () => <ButtonBomb solution = {levelOneSolution} level = {1} emoji = {levelOneEmoji} instructions = {levelOneInstructions} timeLeft = {levelOneTimer} /> } />
            <Route exact path = "/level2" render = { () => <WireBomb solution = {levelTwoSolution} level = {2} emoji = {levelTwoEmoji} instructions = {levelTwoInstructions} timeLeft = {levelTwoTimer} /> } />
            <Route exact path = "/level3" render = { () => <ButtonBomb solution = {levelThreeSolution} level = {3} emoji = {levelThreeEmoji} instructions = {levelThreeInstructions} timeLeft = {levelThreeTimer} /> } />
            <Route exact path = "/level4" render = { () => <WireBomb solution = {levelFourSolution} level = {4} emoji = {levelFourEmoji} instructions = {levelFourInstructions} timeLeft = {levelFourTimer} /> } />
            <Route exact path = "/level5" render = { () => <ButtonBomb solution = {levelFiveSolution} level = {5} emoji = {levelFiveEmoji} instructions = {levelFiveInstructions} timeLeft = {levelFiveTimer} /> } />
            <Route exact path = "/level6" render = { () => <WireBomb solution = {levelSixSolution} level = {6} emoji = {levelSixEmoji} instructions = {levelSixInstructions} timeLeft = {levelSixTimer} /> } />
            <Route exact path = "/level7" render = { () => <ButtonBomb solution = {levelSevenSolution} level = {7} emoji = {levelSevenEmoji} instructions = {levelSevenInstructions} timeLeft = {levelSevenTimer} /> } />
            <Route exact path = "/level8" render = { () => <WireBomb solution = {levelEightSolution} level = {8} emoji = {levelEightEmoji} instructions = {levelEightInstructions} timeLeft = {levelEightTimer} /> } />
            <Route exact path = "/level9" render = { () => <ButtonBomb solution = {levelNineSolution} level = {9} emoji = {levelNineEmoji} instructions = {levelNineInstructions} timeLeft = {levelNineTimer} /> } />
            <Route exact path = "/level10" render = { () => <WireBomb solution = {levelTenSolution} level = {10} emoji = {levelTenEmoji} instructions = {levelTenInstructions} timeLeft = {levelTenTimer} /> } />

            <Route exact path = "/youlose" render = { () => <YouLose /> } />
        </div>
      </Switch>
      </Provider>
    );
  }

}

export default App;
