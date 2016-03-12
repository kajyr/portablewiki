'use strict';

let React = require('react');


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
	componentWillMount: function() {
		console.log('loading', this.props.pageName)
		fetchLocal(this.props.pageName)
		.then((data) => {return data.text()})
		.then((data) => {
			if (this.isMounted()) {
				this.setState({
					html: data
				});
			}
		})
		.catch(function(err) {
			console.log(err)
		});
	},
	getInitialState: function(){
		return { html: "empty" }
	},
	render: function(){
		return (
			<div> {this.state.html} </div>
		);
	}
});