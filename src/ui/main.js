'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'



import App from './components/App';

import comm from './lib/comm';

import './style/style.scss'


const middleware = compose(
	applyMiddleware(thunk)
)

let store = createStore(rootReducer, middleware)


render(<Provider store={store}>
	<App />
	 </Provider>, document.getElementById('app'));