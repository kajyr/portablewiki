'use strict'

const ipcRenderer = require('electron').ipcRenderer;

let redrawPage = function(html) {
	var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = html;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

ipcRenderer.send('file:load', 'wiki/index.md');

ipcRenderer.on('file:loaded', function(event, data) {
  let page = document.getElementById('page');
  let frag = redrawPage(data);
	page.innerHTML = "";
	page.appendChild(frag);
});