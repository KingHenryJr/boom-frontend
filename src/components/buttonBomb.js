import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buttonPress } from '../actions/actions'
import { clearButtonPressed } from '../actions/actions'
import { exploded } from '../actions/playerActions'
import { defused } from '../actions/playerActions'
import { setPlayerInfo } from '../actions/actions'
import { fetchPlayerInfo } from '../actions/playerActions'
import { withRouter } from 'react-router-dom'

export class ButtonBomb extends Component {

  state = {
    buttonsPressed: [],
    solution: [],
    badButtons:[],
    level: 0
  }


//----- sets initial state with solution + wrong buttons
//----- also fetches current player info and sets props
  componentDidMount(){
    this.setState({
      solution: this.props.solution,
      badButtons: this.props.wrong,
      level: this.props.level
    });
    fetchPlayerInfo().then(json => {this.props.setPlayerInfo(json)});
  }

//----- sets buttons pressed state to be the value of the button pressed
  buttonPress = (event) => {
    this.setState({
      buttonsPressed: [...this.state.buttonsPressed, parseInt(event.target.value)]
    })
  }

//----- passes the current exploded + defused info to the exploded function in player action
  exploded = () => {
    let increaseExplodedCounter = this.props.player.exploded + 1
    let defusedCounter = this.props.player.defused
    exploded(increaseExplodedCounter, defusedCounter)
  }

//----- passes the current exploded + defused info to the exploded function in player action
  defused = () => {
    let increaseDefusedCounter = this.props.player.defused + 1
    let explodedCounter = this.props.player.exploded
    let nextLevel = this.state.level + 1
    defused(increaseDefusedCounter, explodedCounter)
  }

//----- takes you to the loss screen
  lose = () => {
    console.log(this.props);
    this.props.history.push(`/youlose`)
  }

  render() {

//----- handles combination attempts
//----- maps over buttons pressed array & checks if any comparisons are false
    let solution = this.state.solution
    let ansArray = this.state.buttonsPressed
    let matches = ansArray.map((number, index) => {return solution[index] === number})

//----- loss condition - ADD TIMER CONDITION HERE!!!!!
    if (matches.includes(false)) {
      {this.exploded()}
      {this.lose()}
        return (
          <h1> BOOOM!!!!! </h1>
        )
//----- win condition
    } else if (matches.length === solution.length && matches.length !== 0) {
      {this.defused()}

//----- gives us our generic game board
    } else {
      return (
        <div>
          <button onClick = {this.buttonPress} value="1" > 1 </button>
          <button onClick = {this.buttonPress} value="2" > 2 </button>
          <button onClick = {this.buttonPress} value="3" > 3 </button>

          <button onClick = {this.props.clearButtonPress}> Clear! </button>
          <h1>Buttons Pressed: {this.state.buttonsPressed}</h1>
          <h1>Solution: {this.state.solution}</h1>
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
