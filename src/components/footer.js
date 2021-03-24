import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	footer: {
		textAlign: 'center',
		backgroundColor: '#16144a;',
		color: 'white',
		padding: '22px 0'
	},
	footerLink: {
		textDecoration: 'none',
		color: 'white',
		'&:hover': {
			color: '#6c63ff'
		},
		fontWeight: 'bold',
		'&:visited': {
			outline: 'none'
		},
		'&:focus-visible': {
			outline: 'none'
		}
	},
	footerText: {
		marginBottom: '0',
		color: 'rgb(204, 204, 210)',
		fontSize: '0.75rem'
	}
});

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.footer}>
			<p className={classes.footerText}>
				2021 - Made By{' '}
				<a
					href="https://github.com/Jsalvadorpp/myPortafolio"
					target="_blank"
					className={classes.footerLink}
					rel="noreferrer"
				>
					Jsalvadorpp
				</a>
			</p>
		</div>
	);
}
