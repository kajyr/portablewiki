import React, {PropTypes} from 'react';

import Header from './Header';
import Page from './Page';
import Editor from './Editor';


import {
	STATE_PAGE_MODE
} from '../constants'


const App = ({mode}) => {
	return (
		<div>
		<Header />
		{ mode === STATE_PAGE_MODE ? <Page /> : <Editor />}
		</div>
	)
}

App.propTypes = {
	mode: PropTypes.string.isRequired
}

export default App
