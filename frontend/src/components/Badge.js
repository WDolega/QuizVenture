import classes from './Badge.module.css';

const Badge = (props) => {
	return (
		<li
			className={`${classes.badge} ${
				props.isAchieved === true ? undefined : classes.unachieved
			}`}
		></li>
	);
};

export default Badge;
