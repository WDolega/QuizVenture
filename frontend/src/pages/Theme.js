import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

import classes from './Theme.module.css';

const themeDictionary = {
	usa: classes.usa,
	famousPlaces: classes.famousPlaces,
	flags: classes.flags,
	mountains: classes.mountains,
	reservoirs: classes.reservoirs,
	countries: classes.countries,
};

const Theme = (props) => {
	const themeName = props.themeName;

	return (
		<div className={`${classes.theme} ${themeDictionary[themeName]}`}>
			<ul className={classes.list}>
				<Button className={`${classes.lvl_1}`} linkTo={`/${themeName}/level-1`}>
					<h1>1</h1>
				</Button>
				<Button className={classes.lvl_2} linkTo={`/${themeName}/level-2`}>
					<h1>2</h1>
				</Button>
				<Button className={classes.lvl_3} linkTo={`/${themeName}/level-3`}>
					<h1>3</h1>
				</Button>
				<Button className={classes.lvl_4} linkTo={`/${themeName}/level-4`}>
					<h1>4</h1>
				</Button>
			</ul>
		</div>
	);
};

export default Theme;
