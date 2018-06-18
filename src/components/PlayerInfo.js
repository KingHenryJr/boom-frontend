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
      return <div className = "zoom"  alt = {""} />
    } else if (this.props.player.defused < 10 ) {
      return <div className = "stargazer" alt = {""} />
  } else {
      return <div className = "takeoff" alt = {""} />
  }
  }

  showLevel = () => {

    if (this.props.player.defused > 30) {
      return <h1 className = "veteranExplorer"> Level 3: Veteran Explorer </h1>
    } else if (this.props.player.defused < 10) {
      return <h1 className = "spaceCadet"> Level 1: Space Cadet </h1>
    } else {
      return <h1 className = "seasonedExpert"> Level 2: Seasoned Expert </h1>
    }

  }

  render() {

    if (this.props.player) {

      return (
        <div className = "playerBG background" >
          <div className = "playerDetails" >
            <h1 className = "nameIntro" >Hello {this.props.player.username}!</h1>
            <div className = "heartIcon" /> <h2 className = "heartText" > Defused: {this.props.player.defused} </h2>
            <div className = "bombIcon" /> <h2 className = "bombText" > Exploded: {this.props.player.exploded} </h2>

        </div>

        <div className = "playerButtons" >
          <button className = "playerLogout" onClick = {this.logOut} >Logout</button>
          <button className = "playerStart" onClick = {this.startGame} >Play!!!</button>
        </div>

        <div className = "lvl">
          {this.showLevel()}
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
