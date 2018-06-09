import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayerInfo } from '../actions/playerActions'
import PropTypes from 'prop-types';
import { setPlayerInfo } from '../actions/actionCreators'
import thunk from 'redux-thunk';


export class PlayerInfo extends Component {

  componentDidMount(){
    fetchPlayerInfo().then(json => {this.props.setPlayerInfo(json)}).then(console.log(this.props.player));
  }


  logOut = () => {
    localStorage.clear();
    this.props.history.push("/login");
  }

  render() {
    if (this.props.player) {
      return (
        <div>
          <h1>Hello {this.props.player.username}!</h1>
          <h2>Bombs Defused {this.props.player.defused}</h2>
          <h2>Bombs Exploded {this.props.player.exploded}</h2>
          <p> Email: {this.props.player.email} </p>
          <button onClick = {this.logOut} >Logout</button>
        </div>
      )
    } else {
      return (
        <h1> Loading... </h1>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.playerReducer.player
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPlayerInfo: (json) => dispatch(setPlayerInfo(json))

})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo)
