import {
	ACTION_LOADED_PAGE
} from '../constants'

import Remarkable from 'remarkable'
import { ipcRenderer } from 'electron'

const md = new Remarkable()

const fetchLocal = function (url) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest
		xhr.onload = function() {
			resolve(new Response(xhr.responseText, {status: xhr.status}))
		}
		xhr.onerror = function() {
			reject(new TypeError('Local request failed'))
		}
		xhr.open('GET', url)
		xhr.send(null)
	})
}

const loadedPage = (file, folder, source, html) => {
	return {
		type: ACTION_LOADED_PAGE,
		file,
		folder,
		source,
		html
	}
}


export const loadCurrentPage = () => (dispatch, getState) => {
	const state = getState()
	const page = state.page.folder + state.page.file

	fetchLocal(page)
	.then((data) => {return data.text()})
	.then((source) => {
		const html = md
			.render( source )
			.replace(/href="(.*\.md)"/ig, 'data-page-href="$1"');
		dispatch(loadedPage(state.page.file, state.page.folder, source, html))
	})
}

export const savePage = () => (dispatch, getState) => {
	const state = getState()
	const page = state.page.folder + state.page.file
	const source = state.page.source

	ipcRenderer.send('page-save', {
		page: page,
		contents: source
	});
}
