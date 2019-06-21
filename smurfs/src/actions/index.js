import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';
export const UPDATING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF_SUCCESS = 'UPDATING_SMURF_SUCCESS';
export const UPDATING_SMURF_FAILURE = 'UPDATING_SMURF_FAILURE';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETING_SMURF_SUCCESS = 'DELETING_SMURF_SUCCESS';
export const DELETING_SMURF_FAILURE = 'DELETING_SMURF_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => {
	return function(dispatch) {
		dispatch({ type: FETCHING_SMURFS });
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
			})
			.catch(error => {
				dispatch({ type: FETCHING_SMURFS_FAILURE, payload: error.message });
			});
	};
};

export const addSmurf = ({ name, age, height }) => {
	return function(dispatch) {
		dispatch({ type: ADDING_SMURF });
		axios
			.post('http://localhost:3333/smurfs', { name, age, height })
			.then(res => {
				dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data });
			})
			.catch(error => {
				dispatch({ type: ADDING_SMURF_FAILURE, payload: error.message });
			});
	};
};

export const updateSmurf = (id, { name, age, height }) => {
	return function(dispatch) {
		dispatch({ type: UPDATING_SMURF });
		axios
			.put('http://localhost:3333/smurfs/' + id, { name, age, height })
			.then(res => {
				dispatch({ type: UPDATING_SMURF_SUCCESS, payload: res.data });
			})
			.catch(error => {
				dispatch({ type: UPDATING_SMURF_FAILURE, payload: error.message });
			});
	};
};

export const deleteSmurf = id => {
	return function(dispatch) {
		dispatch({ type: DELETING_SMURF });
		axios
			.delete('http://localhost:3333/smurfs/' + id)
			.then(res => {
				dispatch({ type: DELETING_SMURF_SUCCESS, payload: res.data });
			})
			.catch(error => {
				dispatch({ type: DELETING_SMURF_FAILURE, payload: error.message });
			});
	};
};
