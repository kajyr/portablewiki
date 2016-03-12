'use strict';

let React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<header>
		    <a data-page-href="index.md" className="header-item">
		      <img src="app/svg/home3.svg" alt="home" />  
		    </a>
		    <a className="header-item">
		      <img src="app/svg/folder-open.svg" alt="open" /> 
		    </a>
		    <h1 className="header-item">Portable Wiki</h1>
		    <a className="header-item" id="go-edit">
		      <img src="app/svg/pencil.svg" alt="Edit this page" />  
		    </a>
		    <a className="header-item" id="go-show">
		      <img src="app/svg/circle-left.svg" alt="Back to normal mode" />  
		    </a>
		  </header>
			);
	}
});