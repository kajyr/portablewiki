import {
	ACTION_SELECTED_FOLDER
} from '../constants'

const defaultPage = {
	folder: './wiki/',
	file: 'index.md'
}

const page = (state = defaultPage, action) => {
  switch (action.type) {
    case ACTION_SELECTED_FOLDER:
      return Object.assign({}, state, {
      	folder: action.folder
      })
    default:
      return state
  }
}

export default page
