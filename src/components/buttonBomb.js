import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exploded } from '../actions/playerActions'
import { defused } from '../actions/playerActions'
import { setPlayerInfo } from '../actions/actions'
import { fetchPlayerInfo } from '../actions/playerActions'
import { withRouter } from 'react-router-dom'
import explosion from '../assets/img/explosion.gif'
import '../assets/css/buttonBomb.css'



const bombStyle = {
  width: "100%",
  height: "700px",
  backgroundSize: "cover",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

export class ButtonBomb extends Component {

  state = {
    buttonsPressed: [],
    solution: [],
    badButtons:[],
    level: 0,
    emoji: ""
  }

//----- sets initial state with solution + wrong buttons also fetches current player info and sets props
  componentDidMount(){
    this.setState({
      solution: this.props.solution,
      badButtons: this.props.wrong,
      level: this.props.level,
      emoji: this.props.emoji,
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
  win = () => {
    let increaseDefusedCounter = this.props.player.defused + 1
    let explodedCounter = this.props.player.exploded
    let nextLevel = this.state.level + 1
    defused(increaseDefusedCounter, explodedCounter)
    alert(`${this.state.emoji}`)
    this.props.history.push(`/level${nextLevel}`)
  }


  //----- passes the current exploded + defused info to the exploded function in player action
    lose = () => {
      let increaseExplodedCounter = this.props.player.exploded + 1
      let defusedCounter = this.props.player.defused
      exploded(increaseExplodedCounter, defusedCounter)
      console.log("YOU LOSE!!!!!");
      setTimeout( () => this.props.history.push(`/youlose`), 2300)
    }

  render() {
//----- handles combination attempts + maps over buttons pressed array & checks if any comparisons are false
    let solution = this.state.solution
    let ansArray = this.state.buttonsPressed
    let matches = ansArray.map((number, index) => {return solution[index] === number})

//----- loss condition - ADD TIMER CONDITION HERE!!!!!
    if (matches.includes(false)) {

        return (
          <div>
            <img className = "explosion" src = { explosion } style = { bombStyle }/>
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

        <div className = "gameStyle" >

          <div className = "bombContainer" >

            <div className = "timer">

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

          <div className = "instructions">

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
