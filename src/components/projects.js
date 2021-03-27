import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	projectsSection: {
		padding: '20px 80px',
		'@media (max-width: 768px)': {
			padding: '20px 18px'
		}
	}
});

const projects = [
	{
		name: 'Cloud Pos',
		description: 'lorem ipsum',
		tecnologies: [ 'React.js', 'Javascript' ],
		images: [
			'/portafolio_images/CloudPos/image1.jpg',
			'/portafolio_images/CloudPos/image2.png',
			'/portafolio_images/CloudPos/image3.png'
		]
	}
];

export default function Projects() {
	const classes = useStyles();

	return (
		<div className={classes.projectsSection}>
			<h1 className="mb-0">
				<strong>Projects</strong>
			</h1>
			<div className="divider" />
			<div className="row">
				<div className="col-md-4">
					<div className="card">
						<div className="card-body">Project</div>
					</div>
				</div>
			</div>
		</div>
	);
}
