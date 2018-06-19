// ----- react basics
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// ----- keybindings + modals
import Popup from "reactjs-popup";
import keydown from 'react-keydown';
// ----- redux actions
import { exploded } from '../actions/playerActions'
import { defused } from '../actions/playerActions'
import { setPlayerInfo } from '../actions/actions'
import { fetchPlayerInfo } from '../actions/playerActions'
// ----- assets
import explosion from '../assets/img/explosion.gif'
import Timer from './Timer'
import explosionSound from '../assets/sounds/explosionSound.mp3'
import Beep2 from '../assets/sounds/Beep2.mp3'
import error from '../assets/sounds/error.mp3'
import almost from '../assets/sounds/almost.mp3'
import buttonPress from '../assets/sounds/buttonPress.wav'
import countdownClock from '../assets/sounds/countdownClock.mp3'
// ----- css
import '../assets/css/main.css'

export class ButtonBomb extends Component {
  constructor() {
    super();

    this.state = {
      buttonsPressed: [],
      solution: [],
      badButtons:[],
      level: 0,
      emoji: "",
      instructions: "",
      time: 0,
      noTime: false
    }

    this.explosionSound = new Audio(explosionSound)
    this.errorBeep = new Audio(Beep2)
    this.error = new Audio(error)
    this.almost = new Audio(almost)
    this.buttonBeep = new Audio(buttonPress)
    this.backgroundCountdown = new Audio(countdownClock)
  }


//----- sets initial state with solution + wrong buttons also fetches current player info and sets props
  componentDidMount(){

    if( localStorage.getItem('token') === null ) {this.props.history.push('/')} else {

      this.setState({
        solution: this.props.solution,
        badButtons: this.props.wrong,
        level: this.props.level,
        emoji: this.props.emoji,
        instructions: this.props.instructions,
        time: this.props.timeLeft,
      });

      fetchPlayerInfo().then(json => {this.props.setPlayerInfo(json)});
      {this.backgroundCountdown.play()}

    }

  }

//----- sets buttons pressed state to be the value of the button pressed
  buttonPress = (event) => {
    this.buttonBeep.play()
    this.setState({
      buttonsPressed: [...this.state.buttonsPressed, parseInt(event.target.value)]
    })
  }


//----- passes the current exploded + defused info to the exploded function in player action + modal victory screen
  win = () => {
    this.backgroundCountdown.pause()
    this.backgroundCountdown.currentTime = 0
    let increaseDefusedCounter = this.props.player.defused + 1
    let explodedCounter = this.props.player.exploded
    let nextLevel = this.state.level + 1
    defused(increaseDefusedCounter, explodedCounter)
    return <Popup defaultOpen = {true} position = "center" modal closeOnDocumentClick >
           <span> YAY!!!!!!!</span>
             <button className = "closeModalButton" onClick = { () => { this.props.history.push(`/level${nextLevel}`) } } >
              close modal
            </button>
          </Popup>
  }

//----- passes the current exploded + defused info to the exploded function in player action
  lose = () => {
    this.backgroundCountdown.pause()
    this.backgroundCountdown.currentTime = 0
    this.error.play()
    let increaseExplodedCounter = this.props.player.exploded + 1
    let defusedCounter = this.props.player.defused
    exploded(increaseExplodedCounter, defusedCounter)
    setTimeout( () => this.props.history.push(`/youlose`), 2300)
  }

  handleTimeOut = () =>{
    this.setState({
      noTime: true
    })
  }

  timer = () => {
    if (this.state.time !== 0) {
    return <Timer time = { this.state.time } handleTimeOut = { this.handleTimeOut } />
    } else {return ""}
  }

  almostLost = () => {
    if (this.state.time === 2) {
      this.almost.play()
    } else { return "" }
  }

  render() {
//----- handles combination attempts + maps over buttons pressed array & checks if any comparisons are false
    let solution = this.state.solution
    let ansArray = this.state.buttonsPressed
    let matches = ansArray.map((number, index) => {return solution[index] === number})

//----- loss condition - ADD TIMER CONDITION HERE!!!!!
    if (matches.includes(false) || this.state.noTime) {

        return (
          <div>

            <img className = "explosion background" />
            {this.lose()}
          </div>
        )

//----- win condition
    } else if (matches.length === solution.length && matches.length !== 0) {

      return (
        <div>{this.win()}</div>
      )

//----- gives us our generic game board
    } else {
      return (

        <div className = "buttonGameBG background">

          <div className = "gameStyle" >

            <div className = "bombContainer" >

              <div className = "timer" >

                {this.almostLost()}
                {this.timer()}
              </div>

              <div className = "instructionsContainer" >

                <div className = "instructions" >
                  <h1> {this.state.instructions} </h1>
                </div>

              </div>

                <div className = "keypad" >
                  <button onClick = {this.buttonPress} value="1" className = "bombButton" > 1 </button>
                  <button onClick = {this.buttonPress} value="2" className = "bombButton" > 2 </button>
                  <button onClick = {this.buttonPress} value="3" className = "bombButton" > 3 </button>
                  <button onClick = {this.buttonPress} value="4" className = "bombButton" > 4 </button>
                  <button onClick = {this.buttonPress} value="5" className = "bombButton" > 5 </button>
                  <button onClick = {this.buttonPress} value="6" className = "bombButton" > 6 </button>
                  <button onClick = {this.buttonPress} value="7" className = "bombButton" > 7 </button>
                  <button onClick = {this.buttonPress} value="8" className = "bombButton" > 8 </button>
                  <button onClick = {this.buttonPress} value="9" className = "bombButton" > 9 </button>
                </div>

            </div>

        </div>
      </div>
      )
    }
  }

}

//----- gives us our player info as props
const mapStateToProps = (state) => {
  return {
    player: state.playerReducer.player
  }
}

//----- gives us our set player info function
const mapDispatchToProps = (dispatch) => ({
  setPlayerInfo: (json) => dispatch(setPlayerInfo(json))
})

//----- connects our store with our methods / props
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonBomb));
