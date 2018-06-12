// set up fetch funtions here

//----- get request for current user info
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


//----- post request for current user info to login
//----- adds tokens to local storage + turns people back if errors
export const login = (username, password, callback) => dispatch => {
    console.log("checking login info");
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
}


//----- post request for a new user
//----- adds tokens to local storage + turns people back if errors
export const register = (username, password, email, callback) => dispatch => {
  console.log("checking registration info");
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
        localStorage.setItem('token', json.token)
        localStorage.setItem('user_id', json.user_id)
        localStorage.setItem('username', json.username)
        callback("/player");
    } else {
        callback("/signup")
        alert("✋ Incomplete Signup ✋")
    }
  })
}


//----- patch request to add +1 to users exploded column
export const exploded = (increaseExplodedCounter, defusedCounter) => {
  console.log("adding +1 to exploded");

  fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem('user_id')}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": localStorage.getItem('token'),
    },
      body: JSON.stringify({
        exploded: increaseExplodedCounter,
        defused: defusedCounter,
      })
  }).then(res => res.json())

}


//----- patch request to add +1 to users defused column
export const defused = (increaseDefusedCounter, explodedCounter) => {
  console.log("adding +1 to defused");

  fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem('user_id')}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": localStorage.getItem('token'),
    },
    body: JSON.stringify({
      exploded: explodedCounter,
      defused: increaseDefusedCounter,
    })
  }).then(res => res.json())

}
