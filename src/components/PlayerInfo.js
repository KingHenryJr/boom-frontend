import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayerInfo } from '../actions/playerActions'
import { setPlayerInfo } from '../actions/actions'


export class PlayerInfo extends Component {

//----- fetches current player info + sets store props

  componentDidMount(){
    if (localStorage.getItem("token") === null) {
      return ( <div> { alert("Please Login") } { this.logOut() } </div> )
    } else {
      fetchPlayerInfo().then(json => {this.props.setPlayerInfo(json)}); }
  }

//----- logout of current user
  logOut = () => {
    localStorage.clear();
    this.props.history.push("/login");
  }

//----- starts level 1
  startGame = () => {
    this.props.history.push("/intro");
  }

  showBadge = () => {
    if (this.props.player.defused > 30) {
      return <img className = "zoom" />
    } else if (this.props.player.defuse > 10 && this.props.player.defuse < 30) {
      return <img className = "takeoff" />
    } else {
      return <img className = "stargazer" />
    }

  }

  render() {

    if (this.props.player) {

      return (
        <div className = "playerBG" >
          <div className = "playerDetails" >
            <h1>Hello {this.props.player.username}!</h1>
            <h2>Bombs Defused {this.props.player.defused}</h2>
            <h2>Bombs Exploded {this.props.player.exploded}</h2>
            <p> Email: {this.props.player.email} </p>
            <button onClick = {this.logOut} >Logout</button>
            <button onClick = {this.startGame} >Play!!!</button>
          </div>
          
          <div className = "badges" >
            {this.showBadge()}
          </div>

      </div>


      )

    } else {return (<h1> Loading... </h1>)}
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
export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo)
