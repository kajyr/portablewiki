import { connect } from 'react-redux'
import { updateEditingPage, savePage } from '../../ducks/editor'
import Editor from './Editor'

const mapStateToProps = (state, ownProps) => {
	console.log('Editor', state)
	return {
		source: state.page.source
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		savePage: () => dispatch(savePage()),
		handleOnEdit: (event) => dispatch(updateEditingPage(event.target.value))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Editor)
