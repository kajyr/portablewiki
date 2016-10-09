'use strict';

import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

module.exports = React.createClass({
	propTypes: {
		loadPage: PropTypes.func.isRequired,
		html: PropTypes.string.isRequired
	},
	componentDidMount: function() {
		let page = findDOMNode(this);
		let $page = $(page);

		$page.on('click', '[data-page-href]', (e) => {
			let fileRequested = $(e.currentTarget).data('page-href');
			console.log('LINK TO', fileRequested)
		});
		this.props.loadPage()
	},
	render: function(){
		return (
			<div id="page" dangerouslySetInnerHTML={{ __html: this.props.html }} />
		);
	}
});	
