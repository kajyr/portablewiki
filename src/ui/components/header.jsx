'use strict';
// https://design.google.com/icons/
const React = require('react');

const dialog = require('electron').remote.dialog; 
const ipcRenderer = require('electron').ipcRenderer;
const comm = require('../comm.js');
const BackArrow = require('./header-back.jsx');


module.exports = React.createClass({
	openFolderSelection: function() { ipcRenderer.send('base-path-select'); },
	backHome: function() { comm.emit('backhome'); },
	editorMode: function() { comm.emit('editorMode'); },
	showMode: function() { comm.emit('showMode'); },
	back: function() { comm.emit('backHistory'); },
	render: function(){
		return (
			<header>
			<BackArrow />
		    <a className="header-item" onClick={this.backHome}>
		    	<i className="material-icons">home</i> 
		    </a>
		    <a className="header-item" onClick={this.openFolderSelection}>
		    	<i className="material-icons">folder_open</i>
		    </a>
		    <h1 className="header-item">Portable Wiki</h1>
		    <a className="header-item" id="go-edit" onClick={this.editorMode}>
		      	<i className="material-icons">mode_edit</i>
		    </a>
		    <a className="header-item" id="go-show" onClick={this.showMode}>
		    	<i className="material-icons">close</i> 
		    </a>
		  </header>
			);
	}
});