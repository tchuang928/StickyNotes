import React from 'react';
import Note from './note';

// parent component
class Board extends React.Component {
	state = {
		notes: []
	}

	nextId = () => {
		this.uniqueId = this.uniqueId || 0;
		return this.uniqueId++;
	}
	
	add = () => {
		this.state.notes.push({
			id: this.nextId(),
			note: ''
		});
		this.setState((prevState, props) => {
			return {notes: prevState.notes}
		});
	}

	update = (newText, i) => {
		this.state.notes[i].note = newText;
		this.setState((prevState, props) => {
			return {notes: prevState.notes};
		});
	}

	remove = (i) => {
		this.state.notes.splice(i, 1);
		this.setState((prevState, props) => {
			return {notes: prevState.notes};
		})
	}

	eachNote = (note, i) =>  {
		return (
			<Note key={note.id} index={i} onChange={this.update} onRemove={this.remove}>
				{note.note}
			</Note>
		)
	}

	render() {
		return (
			<div className="board">
				{this.state.notes.map(this.eachNote)}
				<button className="btn btn-success btn-sm glyphicon glyphicon-plus" onClick={this.add}/>
			</div>
		);
	}
}

// prop validation
Board.propTypes = {
	// count == number of notes
	count: function(props, propName) {
		if (typeof props[propName] !== 'number') {
			return new Error('The count property must be a number');
		}
		if (props[propName] > 100) {
			return new Error('Creating ' + props[propName] + ' notes is too much')
		}
	}
}

export default Board;
