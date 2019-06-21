import React from 'react';

const idRef = React.createRef();
const nameRef = React.createRef();
const ageRef = React.createRef();
const heightRef = React.createRef();

export default class SmurfForm extends React.Component {
	addSmurfOnClick() {
		const newSmurf = {
			name: nameRef.current.value,
			age: ageRef.current.value,
			height: heightRef.current.value,
		};
		this.props.props.addSmurf(newSmurf);
	}

	updateSmurfOnClick() {
		this.props.props.updateSmurf(idRef.current.value);
	}

	deleteSmurfOnClick() {
		this.props.props.deleteSmurf(idRef.current.value);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<input type="text" ref={idRef} placeholder="id" />
				<input type="text" ref={nameRef} placeholder="name" />
				<input type="text" ref={ageRef} placeholder="age" />
				<input type="text" ref={heightRef} placeholder="height" />
				<button onClick={this.addSmurfOnClick.bind(this)}>Add Smurf</button>
				<button onClick={this.updateSmurfOnClick.bind(this)}>
					Update Smurf
				</button>
				<button onClick={this.deleteSmurfOnClick.bind(this)}>
					Delete Smurf
				</button>
			</div>
		);
	}
}
