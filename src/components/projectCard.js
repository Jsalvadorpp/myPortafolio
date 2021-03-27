import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as Ui from '@material-ui/core';
import * as Icon from '@material-ui/icons';

const useStyles = makeStyles({
	card: {
		backgroundColor: '#24202f',
		color: 'white',
		boxShadow: '3px 3px 10px 0.2px rgba(255, 252, 252, 0.33)',
		marginBottom: '20px'
	},
	mainImage: {
		width: '100%',
		height: '220px',
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
	tecnology: {
		border: '1px solid #6c63ff',
		color: '#6c63ff',
		borderRadius: '20px',
		padding: '2px 8px',
		marginRight: '8px !important',
		marginBottom: '8px'
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

export default function ProjectCard(props) {
	const { project } = props;
	console.log(project.tecnologies);
	const classes = useStyles();

	return (
		<div className={[ 'card', classes.card ].join(' ')}>
			<div className="card-body">
				<img src={project.images[0]} alt={project.name} className={classes.mainImage} />
				<p className={classes.name}>{project.name}</p>
				{/* <p className={classes.description}>{project.description}</p> */}
				<div className="d-flex flex-wrap justify-content-between align-items-center">
					<div className="d-flex flex-wrap">
						{project.tecnologies.map((name) => <span className={classes.tecnology}>{name}</span>)}
					</div>

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

const trucateTxt = (string) => {
	if (string.length > 60) {
		return string.substring(0, 60) + '...';
	}
	return string;
};
