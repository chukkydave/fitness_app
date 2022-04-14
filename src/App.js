import React, { Fragment } from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';
import { Header, Footer } from './Components/Layout';
import Exercises from './Components/Layout/Exercises';
import { muscles, exercises } from './store';

export default function App() {
	const [
		exer,
		setExercises,
	] = useState(exercises);

	const getExerciseByMuscle = () => {
		return Object.entries(
			exer.reduce((exercises, exercise) => {
				const { muscles } = exercise;

				exercises[muscles] =
					exercises[muscles] ? [
						...exercises[muscles],
						exercise,
					] :
					[
						exercise,
					];
				return exercises;
			}, {}),
		);
	};

	const exercise = getExerciseByMuscle();

	return (
		<Fragment>
			<Header />
			<Exercises exercises={exercise} />
			<Footer muscles={muscles} />
		</Fragment>
	);
}
