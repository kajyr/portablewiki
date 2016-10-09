import {
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
	
}
