//----- sets action.payload to be the json data
export const setPlayerInfo = (json) => {
  return {
    type: "SET_PLAYER_INFO",
    payload: json,
  }
}
