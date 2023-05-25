import Badge from '../components/Badge';
import classes from './BadgesRow.module.css';

const BadgesRow = () => {
	return (
		<div className={classes.row1}>
			<ul className={classes.row}>
				<Badge isAchieved={true}></Badge>
				<Badge></Badge>
			</ul>
			<ul className={classes.row}>
				<Badge></Badge>
				<Badge></Badge>
			</ul>
		</div>
	);
};

export default BadgesRow;
