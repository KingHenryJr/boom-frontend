// set up fetch funtions here
import { SET_PLAYER_INFO, UPDATE_PLAYER_INFO, CREATE_PLAYER_INFO, LOGIN_PLAYER} from './types'

export const fetchPlayerInfo = () => {
    console.log("fetching player info");
    if (localStorage.getItem('token')) {
      return fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem('user_id')}`,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem('token'),
        }
      })
      .then(res => res.json())
    }
}

export const login = (username, password, callback) => dispatch => {
    console.log("checking player info");
    fetch(`http://localhost:3000/api/v1/sessions/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'appication/json',
      },
      body: JSON.stringify({username, password})})
    .then(res => res.json())
    .then(json => {
      if (json.token) {
        localStorage.setItem('token', json.token)
        localStorage.setItem('user_id', json.user_id)
        localStorage.setItem('username', json.username)

        callback("/player")
      } else {
        callback("/login")
        alert("✋ Wrong Info ✋")
      }
    })
    .then(json => dispatch({
      type: LOGIN_PLAYER,
      payload: json,
    }))

}

export const register = (username, password, email, callback) => dispatch => {
  console.log(username);

  fetch('http://localhost:3000/api/v1/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({username, password, email, callback})})
    .then(res => res.json())
    .then(json => {
      if (json.token) {
        console.log(json.token)
      localStorage.setItem('token', json.token)
      localStorage.setItem('user_id', json.user_id)
      localStorage.setItem('username', json.username)

      console.log(json)
      callback("/player");

    } else {
      callback("/signup")
      alert("✋ Incomplete Signup ✋")
    }
  })
  .then(json => dispatch({
    type: CREATE_PLAYER_INFO,
    payload: json,
  }))

}
