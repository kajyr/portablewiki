'use strict';
// https://design.google.com/icons/
import React, {PropTypes} from 'react'

import BackArrow from './header-back.jsx'

import {
	STATE_EDITOR_MODE
} from '../../constants'

const editorIcon = (mode, pageMode, editorMode) => {
	if (mode === STATE_EDITOR_MODE) {
		return <a className="header-item" id="go-show" onClick={pageMode}>
		    	<i className="material-icons">close</i> 
		    </a>
	} else {
		return <a className="header-item" id="go-edit" onClick={editorMode}>
		      	<i className="material-icons">mode_edit</i>
		    </a>
	}
}

const Header = ({mode, openFolderSelection, pageMode, editorMode, backHome}) => {
	return (

		<header>
			<BackArrow />
		    <a className="header-item" onClick={backHome}>
		    	<i className="material-icons">home</i> 
		    </a>
		    <a className="header-item" onClick={openFolderSelection}>
		    	<i className="material-icons">folder_open</i>
		    </a>
		    <h1 className="header-item">Portable Wiki</h1>
		    { editorIcon(mode, pageMode, editorMode) }
		    
		    
		  </header>

  );
}

Header.propTypes = {
  openFolderSelection: PropTypes.func,
  editorMode: PropTypes.func.isRequired,
  pageMode: PropTypes.func.isRequired,
  backHome: PropTypes.func,
  mode: PropTypes.string.isRequired
};

export default Header;
