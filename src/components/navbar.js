import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as Ui from '@material-ui/core';
import * as Icon from '@material-ui/icons';
import { Link } from 'react-scroll';

const useStyles = makeStyles({
	navbar: {
		backgroundColor: '#6c63ff00',
		color: 'white'
	},
	sectionsLinks: {
		display: 'flex',
		listStyle: 'none',
		paddingTop: '10px',
		paddingBottom: '10px',
		marginBottom: '0'
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
			color: 'red'
		}
	},
	sectionItem_active: {
		color: 'red'
	},
	icon: {
		'&:hover': {
			color: '#6c63ff'
		}
	}
});

export default function Navbar() {
	const classes = useStyles();

	return (
		<Ui.AppBar position="fixed" className={classes.navbar}>
			<Ui.Toolbar>
				<div className="d-flex align-items-center justify-content-between w-100">
					<ul className={classes.sectionsLinks}>
						<Link className={classes.sectionItem} to={'top'} activeClass="active" spy={true}>
							Home
						</Link>
						<Link className={classes.sectionItem} to={'about'} activeClass="active" spy={true} offset={-60}>
							About
						</Link>
						<Link className={classes.sectionItem}>Projects</Link>
						<Link className={classes.sectionItem}>Contact</Link>
					</ul>
					<div>
						<Ui.IconButton
							edge="start"
							color="inherit"
							className="mx-1"
							href="https://github.com/Jsalvadorpp"
							target="_blank"
						>
							<Icon.GitHub className={classes.icon} />
						</Ui.IconButton>
						<Ui.IconButton
							edge="start"
							color="inherit"
							className="mx-1"
							href="https://www.linkedin.com/in/josesalvadorpp/"
							target="_blank"
						>
							<Icon.LinkedIn className={classes.icon} />
						</Ui.IconButton>
						<Ui.IconButton
							edge="start"
							color="inherit"
							className="mx-1"
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
