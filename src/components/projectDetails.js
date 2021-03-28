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
							<Ui.IconButton
								edge="start"
								color="inherit"
								className={classes.iconBtn}
								href={project.github}
								target="_blank"
							>
								<Icon.GitHub className={classes.icon} />
							</Ui.IconButton>
						) : (
							''
						)}

						{project.url ? (
							<Ui.IconButton
								edge="start"
								color="inherit"
								className={classes.iconBtn}
								href={project.url}
								target="_blank"
							>
								<Icon.Language className={classes.icon} />
							</Ui.IconButton>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
