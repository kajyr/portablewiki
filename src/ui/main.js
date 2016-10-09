'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'


import Header from './components/header.jsx';
import PageSelector from './components/page-selector.jsx';

import comm from './lib/comm';

import './style/style.scss'


let middleware = compose(
	applyMiddleware(thunk)
)

let App = React.createClass({
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
			<div className={this.state.mode}>
				<Header />
				<PageSelector status={this.state.mode} />
			</div>
			);
	}
});


render(<App />, document.getElementById('app'));