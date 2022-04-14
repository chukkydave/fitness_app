import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const styles = {
	paper: {
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
		height: 500,
		overflowY: 'auto',
	},
};

export default ({ exercises }) => (
	<Grid container spacing={1}>
		<Grid item sm>
			<Paper style={styles.paper}>
				{exercises.map(([ group, exercises
				], index) => (
					<Fragment>
						<Typography
							variant="h6"
							style={{ textTransform: 'capitalize' }}
							key={index}
						>
							{group}
						</Typography>
						<List component="ul">
							{exercises.map(({ title }) => (
								<ListItem disablePadding>
									<ListItemText primary={title} />
								</ListItem>
							))}
						</List>
					</Fragment>
				))}
			</Paper>
		</Grid>
		<Grid item sm>
			<Paper style={styles.paper}>
				<Typography variant="h5">Welcome!!</Typography>
				<Typography variant="subtitle1" style={{ marginTop: 20 }}>
					Please select an exercise from the list on the left
				</Typography>
			</Paper>
		</Grid>
	</Grid>
);
