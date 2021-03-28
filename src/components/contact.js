import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as Ui from '@material-ui/core';
import * as Icon from '@material-ui/icons';

const useStyles = makeStyles({
	contactWrapper: {
		textAlign: 'center',
		padding: '20px 0'
	},
	contactBtn: {
		color: 'white',
		borderColor: 'white',
		transition: '0.2s',
		'&:hover': {
			background: '#0a58ca14',
			borderRadius: '25px',
			borderColor: 'white',
			color: 'white !important'
		}
	},
	infoText: {
		color: 'rgb(204, 204, 210)',
		marginBottom: '15px'
	}
});

export default function Contact() {
	const classes = useStyles();

	return (
		<div className={classes.contactWrapper} id="contact">
			<p className={classes.infoText}>
				Do you like what you see?,<br /> then feel free to start a conversation with me
			</p>
			<Ui.Button
				variant="outlined"
				color="primary"
				endIcon={<Icon.Send />}
				className={classes.contactBtn}
				href="mailto:josesalvadorpp@hotmail.com"
			>
				Get in touch
			</Ui.Button>
		</div>
	);
}
