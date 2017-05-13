import React from 'react';
import Note from './note';

// parent component
class Board extends React.Component {
	state = {
		notes: [
			'Call Bill',
			'Email Lisa',
			'Make dentist appt',
			'Send proposal'
		]
	}

	render() {
		return (
			<div className="board">
				{this.state.notes.map((note, i) => {
					return (
						<Note key={i}>{note}</Note>
					);
				})}
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
