import {
	ACTION_TOGGLE_STATE,
	STATE_PAGE_MODE,
	ACTION_SELECTED_FOLDER
} from '../constants'

import { ipcRenderer } from 'electron'

export const startListeningToElectron = () => (dispatch, getState) => {

	ipcRenderer.on('base-path-selected', (event, folder) => {
		dispatch({
			type: ACTION_SELECTED_FOLDER,
			folder
		})
	});

	ipcRenderer.on('page-saved', function() {
		dispatch({
			type: ACTION_TOGGLE_STATE,
			state: STATE_PAGE_MODE
		})
	});
	
}
 
