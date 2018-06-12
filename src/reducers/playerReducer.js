import { SET_PLAYER_INFO, BUTTONS_PRESSED, CLEAR_BUTTONS_PRESSED, CLEAR_WIRES_PRESSED } from '../actions/types';


const initialState = {
  player: [],
  instructions: "",
  wiresPressed: [],
  wireOrder: [],
  badWires: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type){

    case SET_PLAYER_INFO:
      return {...state, player: action.payload}

    case BUTTONS_PRESSED:
      return {...state, buttonsPressed: [...state.buttonsPressed, action.payload]}

    case CLEAR_BUTTONS_PRESSED:
      return {...state, buttonsPressed: []}

    case CLEAR_WIRES_PRESSED:
      return {...state, wiresPressed: []}

    default:
      return state

  }
}

export default reducer
