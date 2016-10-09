import {
	ACTION_TOGGLE_STATE,
	STATE_EDITOR_MODE
} from '../constants'


export const editorMode = () => {
  return {
    type: ACTION_TOGGLE_STATE,
    state: STATE_EDITOR_MODE
  }
}