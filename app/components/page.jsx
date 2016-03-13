'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Remarkable = require('remarkable');
let md = new Remarkable();

let fetchLocal = function (url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest
    xhr.onload = function() {
      resolve(new Response(xhr.responseText, {status: xhr.status}))
    }
    xhr.onerror = function() {
      reject(new TypeError('Local request failed'))
    }
    xhr.open('GET', url)
    xhr.send(null)
  })
}

module.exports = React.createClass({
	loadPage: function (page) {
		fetchLocal(page)
		.then((data) => {return data.text()})
		.then((markdown_data) => {
			if (!this.isMounted()) { return; }
			
			let html = md.render( markdown_data );
			html = html.replace(/href="(.*\.md)"/ig, 'data-page-href="$1"');

			this.setState({
				html: html
			});
		})
		.catch(function(err) {
			console.log(err)
		});
	},
	componentWillMount: function() {
		this.loadPage(this.props.pageName)
	},
	componentDidUpdate: function() {

		let page = ReactDOM.findDOMNode(this);
		let $page = $(page);

		$page.on('click', '[data-page-href]', (e) => {
			let fileRequested = $(e.currentTarget).data('page-href');
			this.loadPage(fileRequested);
		});
	},
	getInitialState: function(){
		return { html: "" }
	},
	render: function(){
		return (
			<div dangerouslySetInnerHTML={{ __html: this.state.html }} />
		);
	}
});	