import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = (state, ownProps) => {

	return {
		mode: state.ui
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
