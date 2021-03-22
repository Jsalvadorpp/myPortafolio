import React from 'react';
import { makeStyles } from '@material-ui/styles';
//import * as Ui from '@material-ui/core';
//import * as Icon from '@material-ui/icons';
import Particles from 'react-particles-js';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
	bannerWrapper: {
		width: '100%',
		height: '100vh',
		backgroundImage: 'url("images/bck.jpg")',
		backgroundColor: 'rgba(40, 40, 56, 0.63)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50% 60%',
		backgroundBlendMode: 'overlay',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		position: 'relative',
		textAlign: 'center',
		backgroundAttachment: 'fixed'
	},
	particles: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	},
	myName: {
		fontSize: '3.5rem',
		marginBottom: '30px',
		letterSpacing: '2.5px',
		padding: '0 30px'
	},
	title: {}
});

const particlesParams = {
	particles: {
		number: {
			value: 35
		},
		size: {
			value: 3
		}
	},
	interactivity: {
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			}
		}
	}
};

export default function MainBanner() {
	const classes = useStyles();

	return (
		<div className={classes.bannerWrapper}>
			<Particles className={classes.particles} params={particlesParams} />
			<div className={classes.bannerContent}>
				<Fade top>
					<h1 className={classes.myName}>HI, I'M JOSE SALVADOR</h1>
				</Fade>

				<h4 className={classes.title}>
					<Typed
						strings={[ 'Front End Developer', 'Back End Developer', 'Full Stack Developer | MERN STACK' ]}
						typeSpeed={50}
						backSpeed={75}
					/>
				</h4>
			</div>
		</div>
	);
}
