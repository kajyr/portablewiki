'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import PageLoader from './page-loader.jsx';

const ipcRenderer = require('electron').ipcRenderer;
import comm from '../lib/comm.js';



module.exports = React.createClass({
	_history: [],
	_indexFile: 'index.md',
	setBaseFolder: function(folder) {
		this._history = [];
		this.setState({
			page: this._indexFile,
			path: folder + "/"
		});
	},
	selectPage: function(page, skipHistory) {
		if (skipHistory !== true) {
			this._history.push(this.state.page);
		}
		this.setState({ page });
	},
	back: function() {
		if (this._history.length > 0) {
			let page = this._history.pop();
			this.selectPage(page, true);
		}
	},
	componentWillMount: function() {
		ipcRenderer.on('base-path-selected', (event, folder) => { this.setBaseFolder(folder); });
		ipcRenderer.send('base-path-get');

		comm.on('backhome', () => { this.selectPage(this._indexFile); });
		comm.on('backHistory', this.back);
	},
	componentDidMount: function() {
		let page = ReactDOM.findDOMNode(this);
		let $page = $(page);

		$page.on('click', '[data-page-href]', (e) => {
			let fileRequested = $(e.currentTarget).data('page-href');
			this.selectPage(fileRequested);
		});		
	},
	getInitialState: function() {
		return {
			page: this._indexFile,
			path: "./wiki/",
		}
	},
	render: function(){
		return (
			<PageLoader page={this.state.path + this.state.page} />
		);
	}
});	