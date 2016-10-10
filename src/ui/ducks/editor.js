import {
	ACTION_TOGGLE_STATE,
} from '../constants'

import { ipcRenderer } from 'electron'

export const ACTION_EDITING_PAGE = 'app/page/editing'

export const updateEditingPage = (source) => {
	return {
		type: ACTION_EDITING_PAGE,
		source
	}
}

export const savePage = () => (dispatch, getState) => {
	const state = getState()
	const page = state.page.folder + state.page.file
	const source = state.editor.source || state.page.source

	ipcRenderer.send('page-save', {
		page: page,
		contents: source
	});
}

const defaultState = {
	source: null
}

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case ACTION_EDITING_PAGE: 
		return {
			source: action.source
		}
		case ACTION_TOGGLE_STATE:
			return defaultState;
		default:
			return state;
	}
}
