'use strict'

const ipcRenderer = require('electron').ipcRenderer;

let redrawPage = function(html) {
	let frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = html;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

let page = document.getElementById('page');

ipcRenderer.send('file:load', 'index.md');

ipcRenderer.on('file:loaded', function(event, data) {
  let frag = redrawPage(data);
	page.innerHTML = "";
	page.appendChild(frag);
});


page.addEventListener('click', function(e) {
	if (e.target.tagName === 'A') {
		e.stopPropagation();
		return false;
	}
})
