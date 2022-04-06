import React, { Fragment } from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Textfield from '@mui/material/TextField';
import { Header, Footer } from './Components/Layout';
import Exercises from './Components/Layout/Exercises';

export default function App() {
	return (
		<Fragment>
			<Header />
			<Exercises />
			<Footer />
		</Fragment>
	);
}
