'use strict';

import React from 'react';
import { findDOMNode } from 'react-dom';

import PageLoader from '../page-loader.jsx';

module.exports = React.createClass({

	componentDidMount: function() {
		let page = findDOMNode(this);
		let $page = $(page);

		$page.on('click', '[data-page-href]', (e) => {
			let fileRequested = $(e.currentTarget).data('page-href');
			console.log('LINK TO', fileRequested)
			this.selectPage(fileRequested);
		});		
	},
	render: function(){
		return (
			<PageLoader page={this.props.file} />
		);
	}
});	
