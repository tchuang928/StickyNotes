import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.text}</h1>
				<p>{this.props.children}</p>
			</div>
		);
	}
}

ReactDOM.render(
	<div>
		<MyComponent text="Hello World">
		This is Hello World
		</MyComponent>
		<MyComponent text="How are You?">
		This is How are You
		</MyComponent> 
		<MyComponent text="Goodbye">
		This is Goodbye
		</MyComponent> 
	</div>, 
	document.getElementById('react-container')
);
