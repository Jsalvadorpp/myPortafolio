import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as Ui from '@material-ui/core';
import * as Icon from '@material-ui/icons';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#24202f',
		color: 'white',
		boxShadow: '3px 3px 10px 0.2px rgba(255, 252, 252, 0.33)'
	},
	mainImage: {
		width: '100%',
		height: 'auto',
		marginBottom: '20px',
		objectFit: 'cover'
	},
	name: {
		marginBottom: '10px',
		fontWeight: 'bold'
	},
	description: {
		color: 'rgb(204, 204, 210)'
	},
	icon: {
		'&:hover': {
			color: '#6c63ff'
		}
	},
	iconBtn: {
		marginRight: '0.25rem',
		marginLeft: '0.25rem',
		'@media (max-width: 580px)': {
			paddingTop: '5px'
		},
		paddingRight: '0',
		paddingLeft: '0'
	},
	linkBtn: {
		marginRight: '10px',
		border: '1px solid white',
		borderRadius: '15px',
		padding: '4px 12px',
		color: 'white',
		transition: '0.32s',
		textDecoration: 'none',
		'&:hover': {
			color: '#6c63ff',
			borderColor: '#6c63ff',
			cursor: 'pointer'
		}
	}
});

export default function ProjectDetails(props) {
	const { project } = props;
	const classes = useStyles();

	return (
		<div className={classes.card}>
			<div className="card-body">
				<img src={project.images[0]} alt={project.name} className={classes.mainImage} />

				<p className={classes.name}>{project.name}</p>
				<p className={classes.description}>{project.description}</p>
				<div className="d-flex flex-wrap justify-content-between align-items-center">
					<div>
						{project.github ? (
							<a className={classes.linkBtn} href={project.github}>
								Code
							</a>
						) : (
							''
						)}

						{project.url ? (
							<a className={classes.linkBtn} href={project.url}>
								Website
							</a>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
