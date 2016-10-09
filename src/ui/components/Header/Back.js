'use strict';

import React, {PropTypes} from 'react'


const Back = ({back}) => {

	return (
	<a className="header-item" onClick={back}>
		<i className="material-icons">arrow_back</i>
	</a>
	);
}

Back.propTypes = {
	back: PropTypes.func.isRequired
};

export default Back;
