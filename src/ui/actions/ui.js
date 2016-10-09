import {
	ACTION_TOGGLE_STATE,
	ACTION_SELECT_FOLDER,
	ACTION_SELECTING_FOLDER,
	STATE_EDITOR_MODE
} from '../constants'

import { ipcRenderer } from 'electron'

export const editorMode = () => {
	return {
		type: ACTION_TOGGLE_STATE,
		state: STATE_EDITOR_MODE
	}
}

export const selectFolder = () => {

	ipcRenderer.send('base-path-select');

	return {
		type: ACTION_SELECTING_FOLDER
	}

}



