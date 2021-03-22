import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';
//import components
import MainBanner from './components/mainBanner';
import AboutMe from './components/aboutMe';
import NavBar from './components/navbar';

const useStyles = makeStyles({
	rootWrapper: {
		position: 'relative'
	},
	particles: {
		position: 'absolute',
		height: '100%',
		width: '100%'
	}
});

const particlesParams = {
	particles: {
		number: {
			value: 60,
			density: {
				enable: true,
				value_area: 1500
			}
		},
		line_linked: {
			enable: true,
			opacity: 0.02
		},
		move: {
			direction: 'right',
			speed: 0.05
		},
		size: {
			value: 1.5
		},
		opacity: {
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0.05
			}
		}
	},
	interactivity: {
		events: {
			onclick: {
				enable: true,
				mode: 'push'
			}
		},
		modes: {
			push: {
				particles_nb: 1
			}
		}
	},
	retina_detect: true
};

function App() {
	const classes = useStyles();

	return (
		<div className={classes.rootWrapper}>
			<Particles params={particlesParams} className={classes.particles} />

			<NavBar />
			<MainBanner />
			<AboutMe />
		</div>
	);
}

export default App;
