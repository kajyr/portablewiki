import { connect } from 'react-redux'
import { editorMode } from '../../actions/ui'
import { loadCurrentPage } from '../../actions/page'

import PageSelector from './Page'

const mapStateToProps = (state, ownProps) => {
	console.log('Page', state)
	return {
		html: state.page.html
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadPage: () => dispatch(loadCurrentPage())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageSelector)
