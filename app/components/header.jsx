'use strict';
const React = require('react');

const dialog = require('electron').remote.dialog; 
const ipcRenderer = require('electron').ipcRenderer;
const comm = require('../comm.js');


module.exports = React.createClass({
	openFolderSelection: function() { ipcRenderer.send('base-path-select'); },
	backHome: function() { comm.emit('backhome'); },
	editorMode: function() { comm.emit('editorMode'); },
	showMode: function() { comm.emit('showMode'); },
	render: function(){
		return (
			<header>
		    <a className="header-item" onClick={this.backHome}>
		      <img src="app/svg/home3.svg" alt="home" />  
		    </a>
		    <a className="header-item" onClick={this.openFolderSelection}>
		      <img src="app/svg/folder-open.svg" alt="open" /> 
		    </a>
		    <h1 className="header-item">Portable Wiki</h1>
		    <a className="header-item" id="go-edit" onClick={this.editorMode}>
		      <img src="app/svg/pencil.svg" alt="Edit this page" />  
		    </a>
		    <a className="header-item" id="go-show" onClick={this.showMode}>
		      <img src="app/svg/circle-left.svg" alt="Back to normal mode" />  
		    </a>
		  </header>
			);
	}
});