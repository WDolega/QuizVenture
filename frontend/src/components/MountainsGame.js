import classes from './MountainsGame.module.css';

const MountainsGame = (props) => {
	return (
		<div className={classes.mountainsGame}>
			<h1>Co jest wyższe?</h1>
			<div className={classes.answers}>
				<button
					className={`${classes.left} ${
						props.isCorrect_1 === true ? classes.correct : classes.wrong
					}`}
				>
					{props.answer_1}
				</button>
				<button
					className={`${classes.right} ${
						props.isCorrect_2 === true ? classes.correct : classes.wrong
					}`}
				>
					{props.answer_2}
				</button>
			</div>
		</div>
	);
};

export default MountainsGame;
