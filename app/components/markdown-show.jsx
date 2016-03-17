'use strict';

const React = require('react');
const Remarkable = require('remarkable');
let md = new Remarkable();


module.exports = React.createClass({
	propTypes: {
		markdown: React.PropTypes.string
	},
	parseMD: function (markdown_data) {
	
		if (!this.isMounted()) { return; }
			
		let html = md.render( markdown_data );
		html = html.replace(/href="(.*\.md)"/ig, 'data-page-href="$1"');

		this.setState({
			html: html
		});
	
	},
	componentWillReceiveProps: function(props) {
		this.parseMD(props.markdown)
	},
	componentWillMount: function() {
		this.parseMD(this.props.markdown)
	},
	getInitialState: function(){
		return { html: "" }
	},
	render: function(){
		return (
			<div id="page" dangerouslySetInnerHTML={{ __html: this.state.html }} />
		);
	}
});	