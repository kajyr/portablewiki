'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

require("./style/style.scss")

import Header from './components/header.jsx';
import PageSelector from './components/page-selector.jsx';

import comm from './comm.js';

let App = React.createClass({
	componentWillMount: function() {
		comm.on('editorMode', () => {
			this.setState({
				mode: "mode-editor"
			});
		})

		comm.on('showMode', () => {
			this.setState({
				mode: "mode-show"
			});
		})
	},
	getInitialState: function(){
		return {
			mode: 'mode-show'
		}
	},
	render: function(){
		return (
			<div className={this.state.mode}>
				<Header />
				<PageSelector status={this.state.mode} />
			</div>
			);
	}
});


ReactDOM.render(<App />, document.getElementById('app'));