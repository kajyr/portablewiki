import { connect } from 'react-redux'
import { editorMode } from '../../actions/ui'

import Header from './Header'

const mapStateToProps = (state, ownProps) => {

	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openFolderSelection: () => {},
		backHome: () => {},
		editorMode: () => dispatch(editorMode()),
		showMode: () => {}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)