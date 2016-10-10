import { combineReducers } from 'redux'

import ui from './ui'
import page from './page'
import editor from '../ducks/editor'

export default combineReducers({
	ui,
	editor,
	page
})
