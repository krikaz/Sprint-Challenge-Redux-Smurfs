import React from 'react';

export default function Smurf({ smurfs }) {
	return smurfs.map(smurf => {
		return (
			<div key={smurf.id}>
				<p>{smurf.name}</p>
				<p>{smurf.age}</p>
				<p>{smurf.height}</p>
			</div>
		);
	});
}
