import React from 'react';
import ReactDOM from 'react-dom';

class Note extends React.Component {
	state = {
		editing: false
	}

	componentDidMount() {
		$(ReactDOM.findDOMNode(this)).draggable();
	}

	edit = () => {
		this.setState((prevState, props) => {
			return {editing: !prevState.editing}
		});
	}

	save = () => {
		this.props.onChange(this.refs.newText.value, this.props.index);

		this.setState((prevState, props) => {
			return {editing: !prevState.editing}
		});
	}

	remove = () => {
		this.props.onRemove(this.props.index);
	}

	// individual note display
	renderDisplay() {
		return (
			<div className="note">
				<p>{this.props.children}</p>
				<span>
					<button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"/>
					<button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
				</span>
			</div>
		);
	}
	
	// save note
	renderForm() {
		return (
			<div className="note">
				<textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
				<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"/>
			</div>
		)
	}

	// render different views
	render() {
		if (this.state.editing) {
			return this.renderForm();
		} else return this.renderDisplay();
	}
}

export default Note;
