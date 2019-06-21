import React from 'react';

const nameRef = React.createRef();
const ageRef = React.createRef();
const heightRef = React.createRef();

export default class SmurfForm extends React.Component {
	addSmurf() {
		const newSmurf = {
			name: nameRef.current.value,
			age: ageRef.current.value,
			height: heightRef.current.value,
		};
		this.props.props.addSmurf(newSmurf);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<input type="text" ref={nameRef} placeholder="name" />
				<input type="text" ref={ageRef} placeholder="age" />
				<input type="text" ref={heightRef} placeholder="height" />
				<button onClick={this.addSmurf.bind(this)}>Add Smurf</button>
			</div>
		);
	}
}
