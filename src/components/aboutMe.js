import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	aboutSection: {
		padding: '20px 80px',
		'@media (max-width: 768px)': {
			padding: '20px 18px'
		}
	},
	aboutImage: {
		width: '80%',
		minWidth: '220px'
	}
});

export default function AboutMe() {
	const classes = useStyles();

	return (
		<div className={classes.aboutSection} id="about">
			<div className="row">
				<div className="col-lg-6">
					<h1 className="mb-0">
						<strong>About Me</strong>
					</h1>

					<div className="divider" />

					<p style={{ color: '#ccccd2' }}>
						Enthusiastic full Stack developer that uses mainly Javascript, Node.js, Express.js, React.js and
						MongoDb, i'm a person that loves coding. From a young age I was always fascinated with
						technology. I started studying electronic engineering but during my college studies I found my
						passion in software development and programming. I'm always looking to learn new types of
						languages and tools to bring fast, robust, efficient solutions to solve any kind of problems.
					</p>
				</div>
				<div className="col-lg-6 text-center d-flex justify-content-center">
					<img src="/images/aboutme.svg" className={classes.aboutImage} alt="about me" />
				</div>
			</div>
		</div>
	);
}
