'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import MarkdownShow from './markdown-show.jsx';
import MarkdownEditor from './markdown-editor.jsx';

import comm from '../lib/comm.js';



module.exports = React.createClass({
	propTypes: {
		page: React.PropTypes.string,
		markdown: React.PropTypes.string
	},
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
			<div>
			{
				this.state.mode == 'mode-editor' ?
					<MarkdownEditor markdown={this.props.markdown}  page={this.props.page} /> : 
					<MarkdownShow markdown={this.props.markdown} />
			}
			</div>
			)
			
	}
});	