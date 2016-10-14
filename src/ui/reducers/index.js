import { combineReducers } from 'redux'

import ui from './ui'
import editor from '../ducks/editor'
import page from '../ducks/page'

export default combineReducers({
	ui,
	editor,
	page
})
