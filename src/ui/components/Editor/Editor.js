import React, {PropTypes} from 'react'



let nil  = f => f

const Editor = ({source, savePage, handleOnEdit}) => {
	return (
		<div id="editor">
				<textarea defaultValue={source} onChange={handleOnEdit} />
				<div id="actions">
					<button onClick={savePage}>Save</button>
					<button onClick={nil}>Cancel</button>
				</div>
			</div>
		);
}


Editor.propTypes = {
	source: PropTypes.string.isRequired,
	handleOnEdit: PropTypes.func.isRequired,
	savePage: PropTypes.func.isRequired
}

export default Editor
