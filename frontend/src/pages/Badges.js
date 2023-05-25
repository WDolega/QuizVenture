import BadgesRow from '../components/BadgesRow';
import classes from './Badges.module.css';

const Badges = () => {
	return (
		<div className={classes.badgesTheme}>
			<div className={classes.uniform}>
				{Array.from({ length: 7 }).map((_, index) => (
					<BadgesRow key={index} />
				))}
			</div>
		</div>
	);
};

export default Badges;
