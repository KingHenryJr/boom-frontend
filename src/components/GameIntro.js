import React, { Component } from 'react';
import Timer from './Timer'
export default class GameIntro extends Component {

  state = {
    time: 0,
  }


  componentDidMount(){
    if( localStorage.getItem('token') === null ) {this.props.history.push('/')} else {
      this.setState({
        time: 6
      })
    }
  }

  handleTimeOut = () => {
    this.props.history.push("/level1")
  }

  timer = () => {
    if (this.state.time !== 0) {
    return <Timer time = { this.state.time } handleTimeOut = { this.handleTimeOut } />
    } else {return ""}
  }

  render(){
    console.log(this.state.time);
    return (
      <div className = "gameIntroBG background">
        <div className = "countdownContainer" >
          <h1 className = "countdownTimer" > {this.timer()} </h1>
          <h1 className = "countdownInstructions"> Instructions: </h1>
          <h1 className = "countdownInstructions2"> Follow bomb defusal instructions. <br/> Input the correct numbers into the keypad. <br/> Don't blow it.</h1>

        </div>
      </div>
    )
  }

}
