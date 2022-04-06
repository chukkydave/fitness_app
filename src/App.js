import React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';

export default function App() {
	const [
		exercises,
		setExercises,
	] = useState({ exercises: [], title: '' });

	return (
		<div>
			<Typography variant="header1" align="center" gutterBottom>
				Exercise
			</Typography>
		</div>
	);
}
