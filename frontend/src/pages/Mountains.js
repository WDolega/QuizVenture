import MountainsGame from '../components/MountainsGame';
import MountainQuiz from '../components/MountainQuiz';
import classes from './Mountains.module.css';

const Mountains = (props) => {
	return (
		<div className={classes.mountainGameTheme}>
			{/* <MountainsGame
				answer_1={
					<>
						<h2>Denali</h2> <h3>Najwyższy szczyt Ameryki Północnej</h3>
					</>
				}
				isCorrect_1={true}
				answer_2={
					<>
						<h2>Kilimandżaro</h2> <h3>Najwyższy szczyt Afryki</h3>
					</>
				}
				isCorrect_2={false}
			></MountainsGame> */}
			<MountainQuiz level={props.level}></MountainQuiz>
		</div>
	);
};

export default Mountains;
