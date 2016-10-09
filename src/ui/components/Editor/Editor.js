import React, {PropTypes} from 'react'



let nil  = f => f

const Editor = ({source, savePage}) => {
	return (
		<div id="editor">
				<textarea defaultValue={source} />
				<div id="actions">
					<button onClick={savePage}>Save</button>
					<button onClick={nil}>Cancel</button>
				</div>
			</div>
		);
}


Editor.propTypes = {
	source: PropTypes.string.isRequired,
	savePage: PropTypes.func.isRequired
}

export default Editor