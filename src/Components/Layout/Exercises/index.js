import React from 'react';
import { Grid, Paper } from '@mui/material';
import Leftpane from './Leftpane';
import Rightpane from './Rightpane';

const styles = {
	paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
	},
};

export default (props) => (
	<Grid container spacing={1}>
		<Leftpane styles={styles} />
		<Rightpane styles={styles} />
	</Grid>
);
