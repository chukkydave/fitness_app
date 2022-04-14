import React, { useState, SyntheticEvent } from 'react';
import { Tabs, Tab, Paper } from '@mui/material';

export default ({ muscles, onSelect }) => {
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
				<Tab label="All" />
				{muscles.map((muscle, id) => <Tab key={id} label={muscle} />)}
			</Tabs>
		</Paper>
	);
};
