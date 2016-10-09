import { connect } from 'react-redux'
import { editorMode, selectFolder } from '../../actions/ui'

import Header from './Header'

const mapStateToProps = (state, ownProps) => {

	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openFolderSelection: () => dispatch(selectFolder()),
		backHome: () => {},
		editorMode: () => dispatch(editorMode()),
		showMode: () => {}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)
