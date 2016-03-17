'use strict';

import React from 'react';
import {ipcRenderer} from 'electron';
import comm from '../comm.js';

module.exports = React.createClass({
	propTypes: {
		page: React.PropTypes.string,
		markdown: React.PropTypes.string
	},
	save: function() {
		ipcRenderer.send('page-save', {
			page: this.props.page,
			contents: this.state.data
		});

		ipcRenderer.on('page-saved', function() {
			comm.emit('showMode');
		});
	},
	handleChange: function(event) {
		this.setState({data: event.target.value});
	},
	getInitialState: function(){
		return {
			data: this.props.markdown
		}
	},
	render: function(){
		return (
			<div id="editor">
				<textarea defaultValue={this.props.markdown} onChange={this.handleChange} />
				<div id="actions">
					<button onClick={this.save}>Save</button>
				</div>
			</div>		
		);
	}
});	