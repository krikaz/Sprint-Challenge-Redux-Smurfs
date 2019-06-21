import React from 'react';

export default class SmurfForm extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.nameRef = React.createRef();
	// 	this.ageRef = React.createRef();
	//   this.heightRef = React.createRef();
	// }

	nameRef = React.createRef();
	ageRef = React.createRef();
	heightRef = React.createRef();

	newSmurf = {
		name: this.nameRef.current.value,
		age: this.ageRef.current.value,
		height: this.heightRef.current.value,
	};

	addSmurf() {
		this.props.addSmurf(this.newSmurf);
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.nameRef} placeholder="name" />
				<input type="text" ref={this.ageRef} placeholder="age" />
				<input type="text" ref={this.heightRef} placeholder="height" />
				<button onClick={this.addSmurf}>Add Smurf</button>
			</div>
		);
	}
}
