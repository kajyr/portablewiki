'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const MarkdownShow = require('./markdown-show.jsx');

const ipcRenderer = require('electron').ipcRenderer;
const comm = require('../comm.js');



module.exports = React.createClass({
	componentWillMount: function() {
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

		ipcRenderer.on('base-path-selected', (event, folder) => {
			this.setState({
				page: "index.md",
				path: folder[0] + "/"
			});
		});

		comm.on('backhome', () => {
			this.setState({
				page: "index.md"
			});
		})

	},
	getInitialState: function(){
		return {
			page: "index.md",
			path: "./wiki/"
		}
	},
	render: function(){
		return (
			<MarkdownShow page={this.state.page} path={this.state.path}/>
		);
	}
});	