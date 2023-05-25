import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';

import logo from '../assets/icons/logo_quiz_venture.png';
import Button from './Button';

const MainNavigation = () => {
	const token = useRouteLoaderData('root');

	return (
		<header className={classes.header}>
			<NavLink to='/'>
				<img src={logo} alt='logo QuizVenture' />
			</NavLink>
			<nav>
				<ul className={classes.list}>
					<Button linkTo='/' className={classes.bonfire}>
						<h1>10</h1>
					</Button>
					<Button linkTo='/' className={classes.friends}></Button>
					<Button linkTo='/badges' className={classes.badges}></Button>
					{token && (
						<li className={classes.profile}>
							<Form action='/logout' method='post'>
								<button></button>
							</Form>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
