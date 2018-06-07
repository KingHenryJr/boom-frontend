import React, { Component } from 'react';

export default class PlayerInfo extends Component {

  state = {
    player: [],
  }

  componentDidMount(){
    this.getInfo();
  }

  getInfo = () => {

    if (localStorage.getItem('token')) {

      fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem('user_id')}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('token'),
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({
            player: json
          })
        })

    } else {
      this.props.history.push("/login");
    }

  }

  logOut = () => {
    localStorage.clear();
    this.props.history.push("/login");
  }

  render() {
    return(
      <div>
        <h1>Hello {this.state.player.username}!</h1>
        <p>Bombs Defused: {this.state.player.defused}</p>
        <p>Bombs Exploded: {this.state.player.exploded}</p>
        <button onClick = {this.logOut} >Logout</button>
      </div>
    )
  }

}
