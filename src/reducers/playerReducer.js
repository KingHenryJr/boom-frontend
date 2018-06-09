import { SET_PLAYER_INFO, CREATE_PLAYER_INFO, UPDATE_PLAYER_INFO, LOGIN_PLAYER} from '../actions/types';


const initialState = {
  player: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){

    case SET_PLAYER_INFO:
      return {
        ...state,
        player: action.payload
      }

    case LOGIN_PLAYER:
      return {
        ...state,
        player: action.payload
      }

    case CREATE_PLAYER_INFO:
      return {
        ...state,
        player: action.payload
      }

    default:
      return state

  }
}

export default reducer
