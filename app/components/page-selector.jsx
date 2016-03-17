'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import PageLoader from './page-loader.jsx';

const ipcRenderer = require('electron').ipcRenderer;
const comm = require('../comm.js');



module.exports = React.createClass({
	componentWillMount: function() {
		ipcRenderer.on('base-path-selected', (event, folder) => {
			this.setState({
				page: "index.md",
				path: folder + "/"
			});
		});
		ipcRenderer.send('base-path-get');

		comm.on('backhome', () => {
			this.setState({
				page: "index.md"
			});
		});
	},
	componentDidMount: function() {
		let page = ReactDOM.findDOMNode(this);
		let $page = $(page);

		$page.on('click', '[data-page-href]', (e) => {
			let fileRequested = $(e.currentTarget).data('page-href');
			this.setState({
				page: fileRequested
			});
		});		
	},
	getInitialState: function(){
		return {
			page: "index.md",
			path: "./wiki/",
		}
	},
	render: function(){
		return (
			<PageLoader page={this.state.path + this.state.page} />
		);
	}
});	