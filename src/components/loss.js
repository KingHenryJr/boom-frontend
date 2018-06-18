import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


export class YouLose extends Component {

//----- brings you back to the last level you played
  replay = () => {
    this.props.history.goBack()
  }

//----- brings you back to level1
  restart = () => {
    this.props.history.push("/level1")
  }

//----- brings you back to player page
  quit = () => {
    this.props.history.push("/player")
  }

  render() {
    return (
      <div className = "lossBG background" >


        <div className = "buttonContainer" >
          <h1 className = "youLost" > BOOOOM!!!! </h1>
          <button className = "replayButton" onClick = {this.replay} > replay </button>

          <button className = "restartButton" onClick = {this.restart} > restart </button>
          <button className = "quitButton" onClick = {this.quit} > quit </button>
        </div>

    </div>
    )
  }

}

export default withRouter(connect(null, null)(YouLose))
