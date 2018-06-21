import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


export class YouWin extends Component {

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
      <div className = "victoryBG background" >
        <div className = "victoryButtonContainer" >
          <h1 className = "youWin" > YOU WIN!!!! </h1>

          <button className = "victoryRestartButton" onClick = {this.restart} > start over </button>
          <button className = "victoryQuitButton" onClick = {this.quit} > quit </button>
        </div>

    </div>
    )
  }

}

export default withRouter(connect(null, null)(YouWin))
