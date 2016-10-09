import React, {PropTypes} from 'react';

import Header from './Header';
import Page from './Page/PageContainer';


const App = () => {
	return (
		<div>
		<Header />
		<Page status='mode-show' />
		</div>
	)
}

export default App
