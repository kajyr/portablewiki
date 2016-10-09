'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { startListeningToElectron } from './actions/electron'


import App from './components/App';

import comm from './lib/comm';

import './style/style.scss'


const middleware = applyMiddleware(thunk)

let store = createStore(rootReducer, middleware)
store.dispatch( startListeningToElectron() )

render(<Provider store={store}>
	<App />
	 </Provider>, document.getElementById('app'));
