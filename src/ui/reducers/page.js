import {
	ACTION_SELECTED_FOLDER,
	ACTION_LOADED_PAGE
} from '../constants'

const defaultPage = {
	folder: './wiki/',
	file: 'index.md',
	source: '',
	html: ''
}

const page = (state = defaultPage, action) => {
	switch (action.type) {
		case ACTION_SELECTED_FOLDER:
			return Object.assign({}, state, {
				folder: action.folder
			})
		case ACTION_LOADED_PAGE:
			return Object.assign({}, state, {
				folder: action.folder,
				file: action.file,
				source: action.source,
				html: action.html
			})
		default:
		return state
  }
}

export default page
