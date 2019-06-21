import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import * as actions from './actions';
import connect from 'react-redux';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div>Welcome to your Redux version of Smurfs!</div>
				<div>Start inside of your `src/index.js` file!</div>
				<div>Have fun!</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		smurfs: state.rootReducer.smurfs,
		fetchingSmurfs: state.rootReducer.fetchingSmurfs,
		addingSmurf: state.rootReducer.addingSmurf,
		updatingSmurf: state.rootReducer.updatingSmurf,
		deletingSmurf: state.rootReducer.deletingSmurf,
		error: state.rootReducer.error,
	};
}

export default connect(
	mapStateToProps,
	actions
)(App);
