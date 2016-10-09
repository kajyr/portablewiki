import {
	ACTION_TOGGLE_STATE,
	STATE_EDITOR_MODE,
	STATE_SHOW_MODE
} from '../constants'


const ui = (state = STATE_SHOW_MODE, action) => {
  switch (action.type) {
    case ACTION_TOGGLE_STATE:
      return action.state
    default:
      return state
  }
}

export default ui