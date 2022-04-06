import React, { useState, SyntheticEvent } from 'react';
import { Tabs, Tab, Paper } from '@mui/material';

export default (props) => {
	const [
		value,
		setValue,
	] = useState(0);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<Paper>
			<Tabs
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={handleChange}
				centered
			>
				<Tab label="Item One" />
				<Tab label="Item Two" />
				<Tab label="Item Three" />
			</Tabs>
		</Paper>
	);
};
