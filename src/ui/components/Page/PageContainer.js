import { connect } from 'react-redux'
import { editorMode } from '../../actions/ui'

import PageSelector from './page-selector'

const mapStateToProps = (state, ownProps) => {
	console.log('Page', state)
	return {
		file: state.page.folder + state.page.file
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
)(PageSelector)
