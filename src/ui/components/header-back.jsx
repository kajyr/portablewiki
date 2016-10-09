'use strict';
// https://design.google.com/icons/
const React = require('react');

const dialog = require('electron').remote.dialog; 
const ipcRenderer = require('electron').ipcRenderer;
const comm = require('../lib/comm.js');


module.exports = React.createClass({
	componentWillMount: function() {
		comm.on('editorMode', () => {
			this._backState = 'backToShow'
		})

		comm.on('showMode', () => {
			this._backState = 'backToPreviousPage'
		})
	},
	back: function() {
		if (this._backState === 'backToShow') {
			comm.emit('showMode');
		} else {
			comm.emit('backHistory');
		}
	},
	render: function(){
		return (
			<a className="header-item" onClick={this.back}>
				<i className="material-icons">arrow_back</i>
			</a>
			);
	}
});