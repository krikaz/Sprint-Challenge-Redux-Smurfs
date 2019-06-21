import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import * as actions from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class App extends Component {
	componentDidMount() {
		// console.log(this.props.smurfs);
		// this.props.fetchSmurfs();
	}

	render() {
		return (
			<div className="App">
				<h1>Smurfs Village</h1>
				<Smurf smurfs={this.props.smurfs} />
				<button onClick={this.props.fetchSmurfs}>Fetch</button>
				<SmurfForm props={this.props} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	// console.log(state);
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs,
		addingSmurf: state.addingSmurf,
		updatingSmurf: state.updatingSmurf,
		deletingSmurf: state.deletingSmurf,
		error: state.error,
	};
}

export default connect(
	mapStateToProps,
	actions
)(App);
