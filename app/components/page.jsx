'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const MarkdownShow = require('./markdown-show.jsx');
const MarkdownEditor = require('./markdown-editor.jsx');

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
		})
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
			<div>
			<MarkdownEditor />
			<MarkdownShow page={this.state.page} path={this.state.path}/>
			</div>
		);
	}
});	