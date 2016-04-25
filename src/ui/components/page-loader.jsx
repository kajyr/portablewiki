'use strict';

const React = require('react');
const Remarkable = require('remarkable');
import PageStatus from './page-status.jsx';

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
	propTypes: {
		page: React.PropTypes.string
	},
	loadPage: function (page) {
		fetchLocal(page)
		.then((data) => {return data.text()})
		.then((markdown_data) => {
			if (!this.isMounted()) { return; }
			
			this.setState({
				markdown: markdown_data
			});
		})
		.catch(function(err) {
			console.log(err)
		});
	},
	componentWillReceiveProps: function(props) {
		this.loadPage(props.page)
	},
	componentWillMount: function() {
		this.loadPage(this.props.page)
	},
	getInitialState: function(){
		return { markdown: "" }
	},
	render: function(){
		return (
			<PageStatus markdown={this.state.markdown} page={this.props.page}/>
		);
	}
});	