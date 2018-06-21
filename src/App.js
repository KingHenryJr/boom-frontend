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
import YouWin from './components/victory'

class App extends Component {

  render() {

    //solution arrays
    const levelOneSolution = [1,1,3,1,1,3]
    const levelOneInstructions = "Press the First Button Twice then the Third Button Once. Repeat"
    const levelOneTimer = 10000
    const levelTwoSolution = [1,3,5]
    const levelTwoInstructions = "Cut wires Left to Right. Cut all odd wires."
    const levelTwoTimer = 10000
    const levelThreeSolution = [2,9,7,2]
    const levelThreeInstructions = "Never press the Fifth Button. Press the Second Button. Then the Ninth. Then the Seventh. Then the Fifth. Then the Second."
    const levelThreeTimer = 10
    const levelFourSolution = [4]
    const levelFourInstructions = "Cut all wires next to Purple wires. Do Not Cut wires next to Blue wires."
    const levelFourTimer = 20
    const levelFiveSolution = [9,1,3,1,5]
    const levelFiveInstructions = "Press the Last Button. Then press the First Button. Then press the Third Button. Then press the Second Button Pressed. Then Press the Fifth."
    const levelFiveTimer = 15
    const levelSixSolution = [5,1]
    const levelSixInstructions = "Don't Cut wires between 2 and 4. Cut wires Right to Left. Cut the first wire. Cut all wires next to Orange Wires. Cut all wires next to Red wires. "
    const levelSixTimer = 15
    const levelSevenSolution = [6,3]
    const levelSevenInstructions = "Even numbers are Silly Numbers. Press the Second Button. Don't press Silly Numbers Unless divisible by Three. Then the Fourth Button. Press the Sixth button. Then the Third."
    const levelSevenTimer = 20
    const levelEightSolution = [1,4]
    const levelEightInstructions = "Never cut yellow wires. Cut all wires divisible by 2. Cut wires left to right. Cut yellow wire. Cut the first wire."
    const levelEightTimer = 20
    const levelNineSolution = [2,4,6,]
    const levelNineInstructions = "Press All Buttons. Don't press buttons that have the Letter E. Press buttons from small to large."
    const levelNineTimer = 25
    const levelTenSolution = [3,1,5]
    const levelTenInstructions = "Cut All wires next to Red wires. Cut All wires next to Yellow Wires. Prioritize cutting Purple Wires. Cut wires from Left to Right."
    const levelTenTimer = 25
    const levelElevenSolution = [9,7,5,3,1,2,4,6,8]
    const levelElevenInstructions = "Press All Odd Buttons from High to Low. Then Press All Even Buttons from Low to High"
    const levelElevenTimer = 20
    const levelTwelveSolution = [2,1,3,5]
    const levelTwelveInstructions = "Never cut Black Wires. Cut all Even wires First from High to Low. Then Cut the First wire. Red wires are actually Black Wires. Then cut Odd Wires from Left to Right"
    const levelTwelveTimer = 20
    const levelThirteenSolution = [3,1,8,6,7]
    const levelThirteenInstructions = "Press the Third Button. Then press the Button the starts with O. Then press the Button that starts with E. Then press the Buttons that start with S from Low to High."
    const levelThirteenTimer = 30
    const levelFourteenSolution = [3,2,4,5]
    const levelFourteenInstructions = "Blue Wires and Green Wires are Switched. Cut the Third Wire. Then Cut the Wire next to the Green Wire. Then Cut the Fourth Wire. Then Cut the Blue Wire."
    const levelFourteenTimer = 25
    const levelFifteenSolution = [9,7,2,7]
    const levelFifteenInstructions = "Press the Last button. Then press the Button Two to the Left. Then press the button that is the remainder of the last two buttons pressed. Then press the second button pressed."
    const levelFifteenTimer = 25
    const levelSixteenSolution = [1,5,3,4,2]
    const levelSixteenInstructions = "Cut All Wires by Alphabetical Order based on Color."
    const levelSixteenTimer = 20
    const levelSeventeenSolution = [5,4,6,7]
    const levelSeventeenInstructions = "Press the Buttons that start with T from High to Low. Then Press the Letters that start with S from Low to High. Instruction One is actually Letters that start with F."
    const levelSeventeenTimer = 30
    const levelEighteenSolution = [5,2,4]
    const levelEighteenInstructions = "Never Cut Yellow Wires. Cut All wires that are Even. Cut All Green Wires from High to Low. The Second Wire is Actually Green. Cut Green Wires First."
    const levelEighteenTimer = 35
    const levelNineteenSolution = [2,3,5,9,8,7,6,4,1]
    const levelNineteenInstructions = "Press the Second Button. Then Press the Button to the right. Then Press the Button with the Sum of the First Two Buttons. Then Press All not Pressed from High to Low."
    const levelNineteenTimer = 30


    return (
      <Provider store = {store}>
        <Switch>
          <div>
            <Route exact path = "/" component = { Home } />
            <Route exact path = "/login" component = { LoginForm }/>
            <Route exact path = "/signup" component = { SignupForm } />
            <Route exact path = "/player" component = { PlayerInfo } />
            <Route exact path = "/intro" component = { GameIntro } />
            <Route exact path = "/level1" render = { () => <ButtonBomb solution = {levelOneSolution} level = {1} instructions = {levelOneInstructions} timeLeft = {levelOneTimer} /> } />
            <Route exact path = "/level2" render = { () => <WireBomb solution = {levelTwoSolution} level = {2} instructions = {levelTwoInstructions} timeLeft = {levelTwoTimer} /> } />
            <Route exact path = "/level3" render = { () => <ButtonBomb solution = {levelThreeSolution} level = {3} instructions = {levelThreeInstructions} timeLeft = {levelThreeTimer} /> } />
            <Route exact path = "/level4" render = { () => <WireBomb solution = {levelFourSolution} level = {4} instructions = {levelFourInstructions} timeLeft = {levelFourTimer} /> } />
            <Route exact path = "/level5" render = { () => <ButtonBomb solution = {levelFiveSolution} level = {5} instructions = {levelFiveInstructions} timeLeft = {levelFiveTimer} /> } />
            <Route exact path = "/level6" render = { () => <WireBomb solution = {levelSixSolution} level = {6} instructions = {levelSixInstructions} timeLeft = {levelSixTimer} /> } />
            <Route exact path = "/level7" render = { () => <ButtonBomb solution = {levelSevenSolution} level = {7}  instructions = {levelSevenInstructions} timeLeft = {levelSevenTimer} /> } />
            <Route exact path = "/level8" render = { () => <WireBomb solution = {levelEightSolution} level = {8} instructions = {levelEightInstructions} timeLeft = {levelEightTimer} /> } />
            <Route exact path = "/level9" render = { () => <ButtonBomb solution = {levelNineSolution} level = {9} instructions = {levelNineInstructions} timeLeft = {levelNineTimer} /> } />
            <Route exact path = "/level10" render = { () => <WireBomb solution = {levelTenSolution} level = {10} instructions = {levelTenInstructions} timeLeft = {levelTenTimer} /> } />
            <Route exact path = "/level11" render = { () => <ButtonBomb solution = {levelElevenSolution} level = {11} instructions = {levelElevenInstructions} timeLeft = {levelElevenTimer} /> } />
            <Route exact path = "/level12" render = { () => <WireBomb solution = {levelTwelveSolution} level = {12} instructions = {levelTwelveInstructions} timeLeft = {levelTwelveTimer} /> } />
            <Route exact path = "/level13" render = { () => <ButtonBomb solution = {levelThirteenSolution} level = {13} instructions = {levelThirteenInstructions} timeLeft = {levelThirteenTimer} /> } />
            <Route exact path = "/level14" render = { () => <WireBomb solution = {levelFourteenSolution} level = {14} instructions = {levelFourteenInstructions} timeLeft = {levelFourteenTimer} /> } />
            <Route exact path = "/level15" render = { () => <ButtonBomb solution = {levelFifteenSolution} level = {15} instructions = {levelFifteenInstructions} timeLeft = {levelFifteenTimer} /> } />
            <Route exact path = "/level16" render = { () => <WireBomb solution = {levelSixteenSolution} level = {16} instructions = {levelSixteenInstructions} timeLeft = {levelSixteenTimer} /> } />
            <Route exact path = "/level17" render = { () => <ButtonBomb solution = {levelSeventeenSolution} level = {17} instructions = {levelSeventeenInstructions} timeLeft = {levelSeventeenTimer} /> } />
            <Route exact path = "/level18" render = { () => <WireBomb solution = {levelEighteenSolution} level = {18} instructions = {levelEighteenInstructions} timeLeft = {levelEighteenTimer} /> } />
            <Route exact path = "/level19" render = { () => <ButtonBomb solution = {levelNineteenSolution} level = {19} instructions = {levelNineteenInstructions} timeLeft = {levelNineteenTimer} /> } />
            <Route exact path = "/level20" render = { () => <YouWin /> } />
            <Route exact path = "/youlose" render = { () => <YouLose /> } />
        </div>
      </Switch>
      </Provider>
    );
  }

}

export default App;
