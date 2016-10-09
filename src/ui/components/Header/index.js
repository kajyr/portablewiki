import { connect } from 'react-redux'
import { editorMode, pageMode, selectFolder } from '../../actions/ui'

import Header from './Header'

const mapStateToProps = (state, ownProps) => {

	return {
		mode: state.ui
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openFolderSelection: () => dispatch(selectFolder()),
		backHome: () => {},
		editorMode: () => dispatch(editorMode()),
		pageMode: () => dispatch(pageMode()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)
