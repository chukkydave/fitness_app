import React from 'react';
import { Grid, Paper } from '@mui/material';

export default (props) => (
	<Grid item sm>
		<Paper style={props.styles.paper}>Right Pane</Paper>
	</Grid>
);
