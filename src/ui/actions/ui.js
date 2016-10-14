import {
	ACTION_TOGGLE_STATE,
	STATE_PAGE_MODE,
	STATE_EDITOR_MODE
} from '../constants'

import { ipcRenderer } from 'electron'

export const editorMode = () => {
	return {
		type: ACTION_TOGGLE_STATE,
		state: STATE_EDITOR_MODE
	}
}

export const pageMode = () => {
	return {
		type: ACTION_TOGGLE_STATE,
		state: STATE_PAGE_MODE
	}
}





