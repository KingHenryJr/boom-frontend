// ----- react basics
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// -----Popups
import Popup from "reactjs-popup";

// ----- redux actions
import { exploded } from '../actions/playerActions'
import { defused } from '../actions/playerActions'
import { setPlayerInfo } from '../actions/actions'
import { fetchPlayerInfo } from '../actions/playerActions'

// ----- assets
import Timer from './Timer'
import snip from '../assets/sounds/snip.mp3'
import tickingClock from '../assets/sounds/tickingClock.mp3'
import explosionSound from '../assets/sounds/explosionSound.mp3'
import Beep2 from '../assets/sounds/Beep2.mp3'
import error from '../assets/sounds/error.mp3'
import almost from '../assets/sounds/almost.mp3'

export class WireBomb extends Component {
  constructor() {
    super();

    this.state = {
      buttonsPressed: [],
      solution: [],
      level: 0,
      emoji: "",
      instructions: "",
      time: 0,
      noTime: false,
      wire1: false,
      wire2: false,
      wire3: false,
      wire4: false,
      wire5: false,
    }
    //add sound files here
    this.explosionSound = new Audio(explosionSound)
    this.errorBeep = new Audio(Beep2)
    this.error = new Audio(error)
    this.almost = new Audio(almost)
    this.snip = new Audio(snip)
    this.backgroundCountdown = new Audio(tickingClock)

  }

//----- sets initial state with solution + wrong buttons also fetches current player info and sets props
  componentDidMount() {

    if( localStorage.getItem('token') === null ) {this.props.history.push('/')} else {

      this.setState({
        solution: this.props.solution,
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
    wirePress1 = (event) => {

      this.snip.play()
      this.setState({
        wire1 : !this.state.wire1,
        buttonsPressed: [...this.state.buttonsPressed, parseInt(event.target.value)]
      })
    }

    wirePress2 = (event) => {

      this.snip.play()
      this.setState({
        wire2 : !this.state.wire2,
        buttonsPressed: [...this.state.buttonsPressed, parseInt(event.target.value)]
      })
    }

    wirePress3 = (event) => {

      this.snip.play()
      this.setState({
        wire3 : !this.state.wire3,
        buttonsPressed: [...this.state.buttonsPressed, parseInt(event.target.value)]
      })
    }

    wirePress4 = (event) => {

      this.snip.play()
      this.setState({
        wire4 : !this.state.wire4,
        buttonsPressed: [...this.state.buttonsPressed, parseInt(event.target.value)]
      })
    }

    wirePress5 = (event) => {

      this.snip.play()
      this.setState({
        wire5 : !this.state.wire5,
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
                Continue!
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

        <div className = "wireGameBG background">
          <div className = "gameStyle" >

            <div className = "wireBombContainer" >

              <div className = "wireTimer" >
                {this.timer()}
              </div>

              <div className = "instructionsContainer" >

                <div className = "instructions" >
                  <h1> {this.state.instructions} </h1>
                </div>

              </div>

                <div className = "wirepad" >
                  <button onClick = {this.wirePress1} value="1" className = { this.state.wire1 ? 'wireButton1C' : 'wireButton1' } />
                  <button onClick = {this.wirePress2} value="2" className = { this.state.wire2 ? 'wireButton2C' : 'wireButton2' } />
                  <button onClick = {this.wirePress3} value="3" className = { this.state.wire3 ? 'wireButton3C' : 'wireButton3' } />
                  <button onClick = {this.wirePress4} value="4" className = { this.state.wire4 ? 'wireButton4C' : 'wireButton4' } />
                  <button onClick = {this.wirePress5} value="5" className = { this.state.wire5 ? 'wireButton5C' : 'wireButton5' } />

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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WireBomb));
