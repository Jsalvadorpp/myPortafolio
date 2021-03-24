import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import * as Ui from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { Link } from 'react-scroll';

const useStyles = makeStyles({
	navbar: {
		backgroundColor: '#6c63ff00',
		color: 'white',
		transition: '0.6s',
		transitionTimingFunction: 'ease-in'
	},
	navbarShow: {
		backgroundColor: '#16144a',
		color: 'white',
		transition: '0.6s',
		transitionTimingFunction: 'ease-out'
	},
	sectionsLinks: {
		display: 'flex',
		listStyle: 'none',
		paddingTop: '10px',
		paddingBottom: '10px',
		marginBottom: '0',
		paddingLeft: '0',
		'@media (max-width: 768px)': {
			paddingBottom: '0'
		}
	},
	sectionItem: {
		padding: '5px 12px',
		border: '1px solid transparent',
		'&:hover': {
			border: '1px solid white',
			borderRadius: '25px',
			transition: '0.2s',
			cursor: 'pointer',
			color: 'white'
		},
		color: 'white',
		textDecoration: 'none',
		'&.active': {
			border: '1px solid white',
			borderRadius: '25px',
			color: 'white'
		}
	},
	sectionItem_active: {
		color: 'red'
	},
	icon: {
		'&:hover': {
			color: '#6c63ff'
		}
	},
	navbarContent: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		flexWrap: 'wrap',
		'@media (max-width: 768px)': {
			justifyContent: 'center'
		}
	},
	iconBtn: {
		marginRight: '0.25rem',
		marginLeft: '0.25rem',
		'@media (max-width: 580px)': {
			paddingTop: '5px'
		}
	}
});

export default function Navbar() {
	const [ navbar, setNavbar ] = useState(false);

	const classes = useStyles();

	const changeBck = () => {
		window.scrollY >= 70 ? setNavbar(true) : setNavbar(false);
	};

	window.addEventListener('scroll', changeBck);

	return (
		<Ui.AppBar position="fixed" className={navbar ? classes.navbarShow : classes.navbar}>
			<Ui.Toolbar>
				<div className={classes.navbarContent}>
					<ul className={classes.sectionsLinks}>
						<Link className={classes.sectionItem} to={'top'} activeClass="active" spy={true}>
							Home
						</Link>
						<Link className={classes.sectionItem} to={'about'} activeClass="active" spy={true} offset={-60}>
							About
						</Link>
						<Link className={classes.sectionItem}>Projects</Link>
						<Link className={classes.sectionItem} to={'contact'} activeClass="active" spy={true}>
							Contact
						</Link>
					</ul>
					<div>
						<Ui.IconButton
							edge="start"
							color="inherit"
							className={classes.iconBtn}
							href="https://github.com/Jsalvadorpp"
							target="_blank"
						>
							<Icon.GitHub className={classes.icon} />
						</Ui.IconButton>
						<Ui.IconButton
							edge="start"
							color="inherit"
							className={classes.iconBtn}
							href="https://www.linkedin.com/in/josesalvadorpp/"
							target="_blank"
						>
							<Icon.LinkedIn className={classes.icon} />
						</Ui.IconButton>
						<Ui.IconButton
							edge="start"
							color="inherit"
							className={classes.iconBtn}
							href="https://www.linkedin.com/in/josesalvadorpp/"
							target="_blank"
						>
							<Icon.Description className={classes.icon} />
						</Ui.IconButton>
					</div>
				</div>
			</Ui.Toolbar>
		</Ui.AppBar>
	);
}
