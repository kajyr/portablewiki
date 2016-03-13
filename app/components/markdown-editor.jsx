'use strict';

const React = require('react');

module.exports = React.createClass({
	loadPage: function (page) {

	},
	componentWillReceiveProps: function(props) {
		this.loadPage(props.path + props.page)
	},
	componentWillMount: function() {
		this.loadPage(this.props.path + this.props.page)
	},
	getInitialState: function(){
		return { html: "" }
	},
	render: function(){
		return (
			<div>
				<textarea></textarea>
			</div>
		);
	}
});	