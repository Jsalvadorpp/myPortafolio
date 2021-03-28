import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ProjectCard from './projectCard';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ProjectDetails from './projectDetails';

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
		description:
			"is  a POS (point of sale) system available as a web application and mobile app . It is a system to manage, control and measure a user's business . the user can keep track of Sales, Profits, Customers, etc. I was in charge on building the interface of the web app version using React.js",
		tecnologies: [ 'React.js', 'Node.js', 'MySQL' ],
		images: [
			'/portafolio_images/CloudPos/image1.jpg',
			'/portafolio_images/CloudPos/image2.png',
			'/portafolio_images/CloudPos/image3.png',
			'/portafolio_images/CloudPos/image4.png',
			'/portafolio_images/CloudPos/image5.png',
			'/portafolio_images/CloudPos/image6.png'
		],
		url: 'https://app.cloudpos.gt/'
	},
	{
		name: 'Mi Compra Venta',
		description:
			"Is a site aimed at companies in Latin America. It's like a reverse Ebay where companies can publish what products they want to buy, and others can offer their products.",
		tecnologies: [ 'Bootstrap', 'Node.js', 'MongoDB' ],
		images: [
			'/portafolio_images/MiCompraVenta/image1.jpg',
			'/portafolio_images/MiCompraVenta/image2.png',
			'/portafolio_images/MiCompraVenta/image3.png',
			'/portafolio_images/MiCompraVenta/image4.png',
			'/portafolio_images/MiCompraVenta/image5.png'
		],
		url: 'https://micompraventa.com/'
	},
	{
		name: 'Vive Recuerdos',
		description:
			'is a website dedicated to the creation and storage of obituaries and tributes of loved ones located in Peru, includes payments through Paypal, also the users can make custom flowers arrangements and publish it',
		tecnologies: [ 'Bootstrap', 'Node.js', 'MongoDB' ],
		images: [
			'/portafolio_images/viveRecuerdos/image1.jpg',
			'/portafolio_images/viveRecuerdos/image2.png',
			'/portafolio_images/viveRecuerdos/image3.jpg',
			'/portafolio_images/viveRecuerdos/image4.png',
			'/portafolio_images/viveRecuerdos/image5.jpg'
		],
		url: 'https://viverecuerdos.com/'
	},
	{
		name: 'Felcas Auto Partes',
		description:
			"It's selling auto parts website for a store located in Venezuela. Includes an admin panel where admins can publish news , add new categories , import products with an excel file, etc.",
		tecnologies: [ 'HTML', 'PHP', 'MySQL' ],
		images: [
			'/portafolio_images/FelcasAutoPartes/image1.jpg',
			'/portafolio_images/FelcasAutoPartes/image2.png',
			'/portafolio_images/FelcasAutoPartes/image3.png',
			'/portafolio_images/FelcasAutoPartes/image4.png'
		],
		url: 'https://felcasonline.com'
	},
	{
		name: 'Angular Weather App',
		description:
			'Weather app using Angular, openweathermap api to get the weather and Algolia places api for address search autocomplete.',
		tecnologies: [ 'Angular', 'Javascript' ],
		images: [
			'/portafolio_images/AngularWeatherApp/image1.png',
			'/portafolio_images/AngularWeatherApp/image2.png',
			'/portafolio_images/AngularWeatherApp/image3.jpg'
		],
		url: 'https://jsalvadorpp.github.io/weather-angular/',
		github: 'https://github.com/Jsalvadorpp/weather-angular'
	},
	{
		name: 'Unexpo Cloud',
		description:
			"It's a website destined to the storage of academic support material related to Electronic Engineering for the free use of students and professors, especially of the University UNEXPO VR-BQTO.",
		tecnologies: [ 'Node.js', 'Express.js', 'MongoDB' ],
		images: [
			'/portafolio_images/unexpoCloud/image1.png',
			'/portafolio_images/unexpoCloud/image2.jpg',
			'/portafolio_images/unexpoCloud/image3.jpg',
			'/portafolio_images/unexpoCloud/image4.png'
		],
		url: 'https://unexpo-web.herokuapp.com',
		github: 'https://github.com/Jsalvadorpp/unexpo-web-repository'
	},
	{
		name: 'My portafolio',
		description:
			'A simple portafolio website made with React.js , Material-Ui framework, to showcase my projects and my experience in Web development',
		tecnologies: [ 'React.js', 'Javascript' ],
		images: [ '/portafolio_images/MyPortafolio/image1.png' ],
		github: 'https://github.com/Jsalvadorpp/myPortafolio'
	},
	{
		name: 'Chess Ruby',
		description:
			'Command Line Ruby Chess Game, for two players. Features: validates player input, does not allow the player to make ilegal moves',
		tecnologies: [ 'Ruby' ],
		images: [ '/portafolio_images/ChessRuby/image1.png' ],
		github: 'https://github.com/Jsalvadorpp/chess-game'
	}
];

export default function Projects() {
	const classes = useStyles();

	//states
	const [ open, setOpen ] = useState(false);
	const [ currentProject, setCurrentProject ] = useState({
		name: '',
		description: '',
		tecnologies: [],
		images: []
	});

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	const showProject = (project) => {
		setCurrentProject(project);
		onOpenModal();
	};

	return (
		<div className={classes.projectsSection} id="projects">
			<Modal open={open} onClose={onCloseModal} center blockScroll={false}>
				<ProjectDetails project={currentProject} />
			</Modal>

			<h1 className="mb-0">
				<strong>Projects</strong>
			</h1>
			<div className="divider" />
			<div className="row d-flex justify-content-center">
				{projects.map((project) => (
					<div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
						<ProjectCard project={project} openModal={() => showProject(project)} />
					</div>
				))}
			</div>
		</div>
	);
}
