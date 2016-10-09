import { connect } from 'react-redux'
import { savePage } from '../../actions/page'
import Editor from './Editor'

const mapStateToProps = (state, ownProps) => {
	console.log('Page', state)
	return {
		source: state.page.source
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		savePage: () => dispatch(savePage())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Editor)
