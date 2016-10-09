'use strict';
// https://design.google.com/icons/
const React = require('react');

const dialog = require('electron').remote.dialog; 
const ipcRenderer = require('electron').ipcRenderer;
const comm = require('../../lib/comm.js');
const BackArrow = require('./header-back.jsx');

const Header = ({openFolderSelection, editorMode, showMode, backHome}) => {
  return (

  	<header>
			<BackArrow />
		    <a className="header-item" onClick={backHome}>
		    	<i className="material-icons">home</i> 
		    </a>
		    <a className="header-item" onClick={openFolderSelection}>
		    	<i className="material-icons">folder_open</i>
		    </a>
		    <h1 className="header-item">Portable Wiki</h1>
		    <a className="header-item" id="go-edit" onClick={editorMode}>
		      	<i className="material-icons">mode_edit</i>
		    </a>
		    <a className="header-item" id="go-show" onClick={showMode}>
		    	<i className="material-icons">close</i> 
		    </a>
		  </header>

  );
}

Header.propTypes = {
  openFolderSelection: React.PropTypes.func,
  editorMode: React.PropTypes.func,
  showMode: React.PropTypes.func,
  backHome: React.PropTypes.func
};

export default Header;
/*
module.exports = React.createClass({
	openFolderSelection: function() { ipcRenderer.send('base-path-select'); },
	backHome: function() { comm.emit('backhome'); },
	editorMode: function() { comm.emit('editorMode'); },
	showMode: function() { comm.emit('showMode'); },
	back: function() { comm.emit('backHistory'); },
	render: function(){
		return (
			
			);
	}
});*/