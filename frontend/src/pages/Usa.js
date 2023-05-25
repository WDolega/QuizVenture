import { NavLink } from 'react-router-dom';
import Quiz from '../components/Quiz';

import classes from './Usa.module.css';

const chooseStates = (lvl) => {
	if (lvl === 1) {
		return [
			{ name: 'Utah', capital: 'Salt Lake City' },
			{ name: 'Teksas', capital: 'Austin' },
			{ name: 'Hawaje', capital: 'Honolulu' },
			{ name: 'Nowy Jork', capital: 'Albany' },
			{ name: 'California', capital: 'Sacramento' },
		];
	}
	if (lvl === 2) {
		return [
			{ name: 'Arizona', capital: 'Phoenix' },
			{ name: 'Dystrykt Kolumbii', capital: 'Waszyngton' },
			{ name: 'Illinois', capital: 'Springfield' },
			{ name: 'Nowy Meksyk', capital: 'Santa Fe' },
			{ name: 'Floryda', capital: 'Tallahassee' },
		];
	}
	if (lvl === 3) {
		return [
			{ name: 'Montana', capital: 'Helena' },
			{ name: 'Oklahoma', capital: 'Oklahoma City' },
			{ name: 'Wisconsin', capital: 'Madison' },
			{ name: 'Oregon', capital: 'Salem' },
			{ name: 'Georgia', capital: 'Atlanta' },
		];
	}
	if (lvl > 3) {
		return [
			{ name: 'Michigan', capital: 'Lansing' },
			{ name: 'Ohio', capital: 'Columbus' },
			{ name: 'Tennessee', capital: 'Nashville' },
			{ name: 'Minnesota', capital: 'St. Paul' },
			{ name: 'Alabama', capital: 'Montgomery' },
		];
	}
};

const Usa = (props) => {
	return (
		<div className={classes.usaQuizTheme}>
			<Quiz states={chooseStates(props.lvl)} />
		</div>
	);
};

export default Usa;
