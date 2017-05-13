import React from 'react';
import ReactDOM from 'react-dom';
import Note from './components/note';
import Board from './components/board';

ReactDOM.render(
	<Board count={10}/>,
	document.getElementById('react-container')
);

// testing states for the first time
/*class Checkbox extends React.Component {
	state = {
		checked: false
	}
	

	handleCheck = () => {
		this.setState((prevState, props) => {
			return {checked: !prevState.checked}
		});
	}

	render() {
		var msg;
		if (this.state.checked) {
			msg = 'checked';
		} else msg = 'unchecked';

		return (
			<div>
				<input type="checkbox" onChange={this.handleCheck}/>
				<p>This box is {msg}</p>
				</div>
		);
	}
}

ReactDOM.render(
	<div>
		<Checkbox />
	</div>,
	document.getElementById('react-container')
);
*/
