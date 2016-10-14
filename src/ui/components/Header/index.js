import { connect } from 'react-redux'
import { editorMode, pageMode } from '../../actions/ui'
import { selectFolder } from '../../ducks/page'

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
